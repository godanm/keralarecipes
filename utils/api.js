import { AsyncStorage } from 'react-native'
const UDACICARDS_STORAGE_KEY = 'Mobile:flashcards'

export function getDecks() {
  return AsyncStorage.getItem(UDACICARDS_STORAGE_KEY)
    .then(results => {
      if(results === null) {
        AsyncStorage.setItem(UDACICARDS_STORAGE_KEY, JSON.stringify(initialData))
        return initialData
      } else {
        return JSON.parse(results)
      }
    })
}

export function saveDeckTitle(title) {
 return AsyncStorage.mergeItem(UDACICARDS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: []
    }
  }))
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(UDACICARDS_STORAGE_KEY)
    .then(results => JSON.parse(results))
    .then(results => {
      results[title].questions.push(card)
      AsyncStorage.setItem(UDACICARDS_STORAGE_KEY, JSON.stringify(results))
      return results
    })
}

const initialData = {
  Category: {
    title: 'Vegeterian',
    subcategory: [
      {
        topic: 'Chicken',
        answer: false
      }
    ]
  }

}
