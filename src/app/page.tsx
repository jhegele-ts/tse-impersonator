"use client";

import { styled } from "#/jsx";
import { Alert } from "@/components/alert/alert";
import { Button } from "@/components/button/button";
import { Input } from "@/components/input/input";
import { getToken } from "@/lib/token";
import { useAuth } from "@/stores/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { useShallow } from "zustand/shallow";
import {
  schemaRoutePostAuthToken,
  type SchemaRoutePostAuthToken,
} from "./api/auth/token/schema";
import { stylesPageHome } from "./page.styles";
import { Slider } from "@/components/slider/slider";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AlertDialog } from "@/components/alert-dialog/alert-dialog";

const PageHome = () => {
  const classes = stylesPageHome();
  const [host, username, sessionLengthMins, auth, setAuth, reset] = useAuth(
    useShallow((state) => [
      state.host,
      state.username,
      state.sessionLengthMins,
      state.auth,
      state.setAuth,
      state.reset,
    ])
  );
  const {
    watch,
    setValue,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaRoutePostAuthToken>({
    resolver: zodResolver(schemaRoutePostAuthToken),
    defaultValues: {
      host: host ?? "",
      username: auth?.valid_for_username ?? "",
      secretKey: "",
      sessionLengthMins: 15,
    },
  });
  const [authErrorMessage, setAuthErrorMessage] = useState<string>("");
  const router = useRouter();

  const prefillValues = useCallback(() => {
    if (host) {
      setValue("host", host);
    }
    if (username) {
      setValue("username", username);
    }
    if (sessionLengthMins) setValue("sessionLengthMins", sessionLengthMins);
  }, [host, username, sessionLengthMins, setValue]);

  useEffect(() => {
    prefillValues();
  }, [prefillValues]);

  const watchedSessionLength = watch("sessionLengthMins");
  const formattedSessionLength = useMemo(() => {
    if (watchedSessionLength === 1) return "1 min";
    if (watchedSessionLength < 60) return `${watchedSessionLength} mins`;
    return "1 hr";
  }, [watchedSessionLength]);

  const handleReset = () => {
    reset();
    prefillValues();
  };

  const handleAlertOpenChange = (open: boolean) => {
    if (!open) setAuthErrorMessage("");
  };

  const onSubmit = handleSubmit(async (formData) => {
    const resToken = await getToken(formData);
    if ("error" in resToken) {
      setAuthErrorMessage(resToken.error.message);
      return;
    }

    setAuth(
      formData.host,
      formData.username,
      formData.sessionLengthMins,
      resToken.data
    );
    router.push(`/impersonated`);
  });

  return (
    <styled.div className={classes.outerContainer}>
      <styled.div className={classes.card}>
        <styled.span className={classes.heading}>
          ThoughtSpot Embedded Impersonator
        </styled.span>
        Provide the required info below to impersonate a user on your
        ThoughtSpot cluster. Note that this functionality will only work with a
        ThoughtSpot Embedded license.
        <Alert variant="info" title="Security considerations">
          <styled.span fontWeight={600}>
            Do not use this application on public or untrusted computers.
          </styled.span>{" "}
          Please be cautious when using this application as the information
          provided below can be used to gain access to and alter your
          ThoughtSpot cluster. This application does not store or log any of the
          information you provide here. It is used to generate a token as part
          of ThoughtSpot's{" "}
          <Link
            href="https://developers.thoughtspot.com/docs/trusted-auth"
            target="_blank"
          >
            Trusted Authentication
          </Link>{" "}
          flow and is then discarded.
        </Alert>
        <styled.form onSubmit={onSubmit} className={classes.form}>
          <styled.div className={classes.formField}>
            <Input
              variant="filled"
              {...register("host")}
              placeholder="ThoughtSpot Host (https://my.thoughtspot.cloud)"
            />
            <styled.div
              className={classes.errorMessage}
              data-error={errors.host !== undefined}
            >
              {errors.host?.message}
            </styled.div>
          </styled.div>
          <styled.div className={classes.formField}>
            <Input
              variant="filled"
              {...register("username")}
              placeholder="Username to impersonate"
            />
            <styled.div
              className={classes.errorMessage}
              data-error={errors.username !== undefined}
            >
              {errors.username?.message}
            </styled.div>
          </styled.div>
          <styled.div className={classes.formField}>
            <Input
              variant="filled"
              {...register("secretKey")}
              placeholder="ThoughtSpot secret key"
              type="password"
            />
            <styled.div
              className={classes.errorMessage}
              data-error={errors.secretKey !== undefined}
            >
              {errors.secretKey?.message}
            </styled.div>
          </styled.div>
          <styled.div className={classes.formField}>
            <styled.span fontSize="15px">
              Session length: {formattedSessionLength}
            </styled.span>
            <Controller
              control={control}
              name="sessionLengthMins"
              render={({ field: { onChange, value } }) => (
                <Slider
                  min={1}
                  max={60}
                  step={1}
                  value={value}
                  onValueChange={(val) => onChange(val)}
                />
              )}
            />
          </styled.div>
          <styled.div
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            gap="16px"
          >
            <Button variant="secondary" type="button" onClick={handleReset}>
              Reset
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </styled.div>
        </styled.form>
      </styled.div>
      <AlertDialog
        open={Boolean(authErrorMessage)}
        onOpenChange={handleAlertOpenChange}
        title="Authentication error"
        description={authErrorMessage}
        buttons={{
          action: (
            <Button variant="primary" type="button">
              OK
            </Button>
          ),
        }}
      />
    </styled.div>
  );
};

export default PageHome;
