"use client";

import { styled } from "#/jsx";
import { AppEmbed } from "@thoughtspot/visual-embed-sdk/react";
import { stylesSlotsPageImpersonated } from "./page.styles";
import { ImpersonationHeader } from "@/components/impersonation-header/impersonation-header";

const PageImpersonated = () => {
  const classes = stylesSlotsPageImpersonated();

  return (
    <styled.div className={classes.outerContainer}>
      <ImpersonationHeader />
      <styled.div className={classes.appEmbed}>
        <AppEmbed
          showPrimaryNavbar={true}
          showAlerts={true}
          showLiveboardDescription={true}
          showLiveboardReverifyBanner={true}
          showLiveboardTitle={true}
          showLiveboardVerifiedBadge={true}
        />
      </styled.div>
    </styled.div>
  );
};

export default PageImpersonated;
