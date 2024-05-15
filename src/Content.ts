interface ContentData {
    name: string
    icon: string
    cards: CardItemData[]
}

interface CardItemData {
    url: string
    title: string
    logo?: string
    desc?: string
}

export type {
    ContentData, CardItemData
}