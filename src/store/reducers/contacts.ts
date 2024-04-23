import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ContactClass from '../../models/Contact'

type ContactsState = {
  items: ContactClass[]
}

const initialState: ContactsState = {
  items: [
    {
      id: 1,
      name: 'Michael Scott',
      email: 'scotmichael@dundermiflin.com',
      phone: '01555332'
    },
    {
      id: 2,
      name: 'Pamela Morgan Halpert',
      email: 'beasleypamela@dundermiflin.com',
      phone: '01555332'
    },
    {
      id: 3,
      name: 'Dwight Kurt Schrute III',
      email: 'shrutedwight@dundermiflin.com',
      phone: '01555332'
    },
    {
      id: 4,
      name: 'James Duncan Halpert',
      email: 'halpertthimothy@dundermiflin.com',
      phone: '01555332'
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    deleteContact: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      )
    },
    edit: (state, action: PayloadAction<ContactClass>) => {
      const contactIndex = state.items.findIndex(
        (c) => c.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.items[contactIndex] = action.payload
      }
    },
    register: (state, action: PayloadAction<ContactClass>) => {
      const existingContact = state.items.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      )
      if (existingContact) {
        alert('Contato já cadastrado')
      } else {
        state.items.push(action.payload)
      }
    }
  }
})

export const { deleteContact, edit, register } = contactsSlice.actions
export default contactsSlice.reducer
