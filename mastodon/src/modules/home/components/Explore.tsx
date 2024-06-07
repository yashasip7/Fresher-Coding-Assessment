import { Stack, Typography } from "@mui/material";
import { Compass } from "lucide-react";
import { subheadline1 } from "../../../typographyStyles";
import { colorPalette } from "../../../ColorPalette";
import { Post } from "./Post";
import { useEffect, useState } from "react";

interface Account {
  id: string;
  username: string;
  acct: string;
  display_name: string;
  locked: boolean;
  bot: boolean;
  discoverable: boolean;
  indexable: boolean;
  group: boolean;
  created_at: string;
  note: string;
  url: string;
  uri: string;
  avatar: string;
  avatar_static: string;
  header: string;
  header_static: string;
  followers_count: number;
  following_count: number;
  statuses_count: number;
  last_status_at: string;
  hide_collections: boolean;
  emojis: unknown[];
  fields: unknown[];
}

interface Status {
  id: string;
  created_at: string;
  in_reply_to_id: string | null;
  in_reply_to_account_id: string | null;
  sensitive: boolean;
  spoiler_text: string;
  visibility: string;
  language: string;
  uri: string;
  url: string;
  replies_count: number;
  reblogs_count: number;
  favourites_count: number;
  edited_at: string | null;
  content: string;
  reblog: null;
  account: Account;
}

export const Explore = (): React.ReactElement => {
//   const [statusesList, setStatusesList] = useState<Status[]>([]);
  useEffect(() => {
    // const getStatuses = async () => {
    //     const response = await fetch(
    //         "https://mastodon.social/api/v1/timelines/public"
    //       )
    //     const result: Status[] = await response.json()
    //     setStatusesList(JSON.parse(JSON.stringify(result)))
    // }
    // getStatuses()
  }, []);

  return (
    <Stack>
      <Stack direction="row" alignItems="center" padding="24px">
        <Compass width={"24px"} height={"24px"} />
        <Typography
          paddingX="12px"
          sx={{
            ...subheadline1,
          }}
        >
          Explore
        </Typography>
      </Stack>
      <Stack borderTop={`1px solid ${colorPalette.border}`}>
        <Stack>
          {/* <Post
            userProfileButtonProps={{
              label: statusesList[0].account.username,
              subLabel: statusesList[0].account.acct,
            }}
            starCount={statusesList[0].favourites_count}
          /> */}
          <Post
            userProfileButtonProps={{
              label: "Robert",
              subLabel: "robbie",
            }}
            starCount={233}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
