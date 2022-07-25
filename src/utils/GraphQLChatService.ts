import { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listDeathmaTVChatMessages } from '@/graphql/queries'
import { createDeathmaTVChatMessage } from '@/graphql/mutations'
import {
  DeathmaTVChatMessage,
  ListDeathmaTVChatMessagesQuery,
} from '@/types/API'
import { GraphQLResult } from '@aws-amplify/api-graphql'

const fetchChatMessages = async () => {
  const result = (await API.graphql(
    graphqlOperation(listDeathmaTVChatMessages)
  )) as GraphQLResult

  const data = result.data as ListDeathmaTVChatMessagesQuery

  if (!data.listDeathmaTVChatMessages) {
    return []
  }

  const messages = data.listDeathmaTVChatMessages
    .items as DeathmaTVChatMessage[]

  return messages.sort((first, second) => {
    if (first.create_at < second.create_at) {
      return -1
    } else if (first.create_at > second.create_at) {
      return 1
    } else {
      return 0
    }
  })
}

export const GraphQLChatService = (initialMessage: DeathmaTVChatMessage) => {
  const [messages, setMessages] = useState<Array<DeathmaTVChatMessage>>([
    initialMessage,
  ])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(async () => {
      setMessages(await fetchChatMessages())
    })()
  })

  const sendMessage = (message: DeathmaTVChatMessage) => {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(async () => {
      await API.graphql({
        query: createDeathmaTVChatMessage,
        variables: {
          input: {
            message: message.message,
            user_name: message.user_name,
            create_at: message.create_at,
            channel_id: message.channel_id,
          },
        },
      })
    })()
  }

  return { messages, sendMessage }
}
