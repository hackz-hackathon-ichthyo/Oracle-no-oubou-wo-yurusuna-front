/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDethamaTVChatMessageInput = {
  message?: string | null,
  user_name?: string | null,
  create_at?: string | null,
  channel_id?: string | null,
};

export type DethamaTVChatMessage = {
  __typename: "DethamaTVChatMessage",
  id: string,
  message: string,
  user_name: string,
  create_at: string,
  channel_id: string,
};

export type TableDethamaTVChatMessageFilterInput = {
  id?: TableIDFilterInput | null,
  message?: TableStringFilterInput | null,
  user_name?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type DethamaTVChatMessageConnection = {
  __typename: "DethamaTVChatMessageConnection",
  items?:  Array<DethamaTVChatMessage | null > | null,
  nextToken?: string | null,
};

export type CreateDethamaTVChatMessageMutationVariables = {
  input: CreateDethamaTVChatMessageInput,
};

export type CreateDethamaTVChatMessageMutation = {
  createDethamaTVChatMessage?:  {
    __typename: "DethamaTVChatMessage",
    id: string,
    message: string,
    user_name: string,
    create_at: string,
    channel_id: string,
  } | null,
};

export type GetDethamaTVChatMessageQueryVariables = {
  id: string,
};

export type GetDethamaTVChatMessageQuery = {
  getDethamaTVChatMessage?:  {
    __typename: "DethamaTVChatMessage",
    id: string,
    message: string,
    user_name: string,
    create_at: string,
    channel_id: string,
  } | null,
};

export type ListDethamaTVChatMessagesQueryVariables = {
  filter?: TableDethamaTVChatMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDethamaTVChatMessagesQuery = {
  listDethamaTVChatMessages?:  {
    __typename: "DethamaTVChatMessageConnection",
    items?:  Array< {
      __typename: "DethamaTVChatMessage",
      id: string,
      message: string,
      user_name: string,
      create_at: string,
      channel_id: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateDethamaTVChatMessageSubscriptionVariables = {
  id?: string | null,
  message?: string | null,
  user_name?: string | null,
};

export type OnCreateDethamaTVChatMessageSubscription = {
  onCreateDethamaTVChatMessage?:  {
    __typename: "DethamaTVChatMessage",
    id: string,
    message: string,
    user_name: string,
    create_at: string,
    channel_id: string,
  } | null,
};
