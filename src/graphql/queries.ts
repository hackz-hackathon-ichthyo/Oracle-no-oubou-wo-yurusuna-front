/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDeathmaTVChatMessage = /* GraphQL */ `
  query GetDeathmaTVChatMessage($channel_id: String!, $create_at: String!) {
    getDeathmaTVChatMessage(channel_id: $channel_id, create_at: $create_at) {
      message
      user_name
      create_at
      channel_id
    }
  }
`;
export const listDeathmaTVChatMessages = /* GraphQL */ `
  query ListDeathmaTVChatMessages(
    $filter: TableDeathmaTVChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeathmaTVChatMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        message
        user_name
        create_at
        channel_id
      }
      nextToken
    }
  }
`;
