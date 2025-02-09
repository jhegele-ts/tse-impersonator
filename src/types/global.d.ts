declare type ClusterAuthRest =
  | {
      username: string;
      password: string;
    }
  | {
      username: string;
      secret_key: string;
    };

declare type Cluster = {
  id: string;
  host: string;
  validity_time_in_sec?: number;
  org_id: number;
  auth: {
    rest: ClusterAuthRest;
  };
};
