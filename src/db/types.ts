type Data = {
  messages: string[]
}

const defaultData: Data = { messages: []}
const db = await JSONPreset<Data>('db.json'. defaultData)
                                                                                                                                                                                   =============================================
