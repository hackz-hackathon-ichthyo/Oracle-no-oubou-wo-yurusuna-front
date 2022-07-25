/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDeathmaTVChatMessageInput = {
  message: string,
  user_name: string,
  create_at: string,
  channel_id: string,
};

export type DeathmaTVChatMessage = {
  __typename: "DeathmaTVChatMessage",
  message: string,
  user_name: string,
  create_at: string,
  channel_id: string,
};

export type UpdateDeathmaTVChatMessageInput = {
  message?: string | null,
  user_name?: string | null,
  create_at: string,
  channel_id: string,
};

export type DeleteDeathmaTVChatMessageInput = {
  create_at: string,
  channel_id: string,
};

export type TableDeathmaTVChatMessageFilterInput = {
  message?: TableStringFilterInput | null,
  user_name?: TableStringFilterInput | null,
  create_at?: TableStringFilterInput | null,
  channel_id?: TableStringFilterInput | null,
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

export type DeathmaTVChatMessageConnection = {
  __typename: "DeathmaTVChatMessageConnection",
  items?:  Array<DeathmaTVChatMessage | null > | null,
  nextToken?: string | null,
};

export type CreateDeathmaTVChatMessageMutationVariables = {
  input: CreateDeathmaTVChatMessageInput,
};

export type CreateDeathmaTVChatMessageMutation = {
  createDeathmaTVChatMessage?:  {
    __typename: "DeathmaTVChatMessage",
    message: string,
    user_name: string,
    create_at: string,
    channel_id: string,
  } | null,
};

export type UpdateDeathmaTVChatMessageMutationVariables = {
  input: UpdateDeathmaTVChatMessageInput,
};

export type UpdateDeathmaTVChatMessageMutation = {
  updateDeathmaTVChatMessage?:  {
    __typename: "DeathmaTVChatMessage",
    message: string,
    user_name: string,
    create_at: string,
    channel_id: string,
  } | null,
};

export type DeleteDeathmaTVChatMessageMutationVariables = {
  input: DeleteDeathmaTVChatMessageInput,
};

export type DeleteDeathmaTVChatMessageMutation = {
  deleteDeathmaTVChatMessage?:  {
    __typename: "DeathmaTVChatMessage",
    message: string,
    user_name: string,
    create_at: string,
    channel_id: string,
  } | null,
};

export type GetDeathmaTVChatMessageQueryVariables = {
  channel_id: string,
  create_at: string,
};

export type GetDeathmaTVChatMessageQuery = {
  getDeathmaTVChatMessage?:  {
    __typename: "DeathmaTVChatMessage",
    message: string,
    user_name: string,
    create_at: string,
    channel_id: string,
  } | null,
};

export type ListDeathmaTVChatMessagesQueryVariables = {
  filter?: TableDeathmaTVChatMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDeathmaTVChatMessagesQuery = {
  listDeathmaTVChatMessages?:  {
    __typename: "DeathmaTVChatMessageConnection",
    items?:  Array< {
      __typename: "DeathmaTVChatMessage",
      message: string,
      user_name: string,
      create_at: string,
      channel_id: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateDeathmaTVChatMessageSubscriptionVariables = {
  message?: string | null,
  user_name?: string | null,
  create_at?: string | null,
  channel_id?: string | null,
};

export type OnCreateDeathmaTVChatMessageSubscription = {
  onCreateDeathmaTVChatMessage?:  {
    __typename: "DeathmaTVChatMessage",
    message: string,
    user_name: string,
    create_at: string,
    channel_id: string,
  } | null,
};

export type OnUpdateDeathmaTVChatMessageSubscriptionVariables = {
  message?: string | null,
  user_name?: string | null,
  create_at?: string | null,
  channel_id?: string | null,
};

export type OnUpdateDeathmaTVChatMessageSubscription = {
  onUpdateDeathmaTVChatMessage?:  {
    __typename: "DeathmaTVChatMessage",
    message: string,
    user_name: string,
    create_at: string,
    channel_id: string,
  } | null,
};

export type OnDeleteDeathmaTVChatMessageSubscriptionVariables = {
  message?: string | null,
  user_name?: string | null,
  create_at?: string | null,
  channel_id?: string | null,
};

export type OnDeleteDeathmaTVChatMessageSubscription = {
  onDeleteDeathmaTVChatMessage?:  {
    __typename: "DeathmaTVChatMessage",
    message: string,
    user_name: string,
    create_at: string,
    channel_id: string,
  } | null,
};
