import { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listDethamaTVChatMessages } from '@/graphql/queries'
import { createDethamaTVChatMessage } from '@/graphql/mutations'
import {
  DethamaTVChatMessage,
  ListDethamaTVChatMessagesQuery,
} from '@/types/API'
import { GraphQLResult } from '@aws-amplify/api-graphql'

const fetchChatMessages = async () => {
  const result = (await API.graphql(
    graphqlOperation(listDethamaTVChatMessages)
  )) as GraphQLResult

  const data = result.data as ListDethamaTVChatMessagesQuery

  if (!data.listDethamaTVChatMessages) {
    return []
  }

  const messages = data.listDethamaTVChatMessages
    .items as DethamaTVChatMessage[]

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

export const GraphQLChatService = (initialMessage: DethamaTVChatMessage) => {
  const [messages, setMessages] = useState<Array<DethamaTVChatMessage>>([
    initialMessage,
  ])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(async () => {
      setMessages(await fetchChatMessages())
    })()
  })

  const sendMessage = (message: DethamaTVChatMessage) => {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(async () => {
      await API.graphql({
        query: createDethamaTVChatMessage,
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
