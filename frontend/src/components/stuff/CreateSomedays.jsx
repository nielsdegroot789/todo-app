import React, { useEffect, useState } from 'react'
import useAdd from '../../hooks/useAxiosAdd'
import useAxiosInit from '../../hooks/useAxiosInit'
import PctInput from '../PctInput'
import PctSelectAdd from '../PctSelectAdd'

const CreateSomedays = ({ stuffName, refreshStuffs }) => {
  const [categories, setCategories] = useState()
  const [category, setCategory] = useState(null)
  const [newCategory, setNewCategory] = useState()

  const { executeAdd: createSomeday } = useAdd({
    data: { name: stuffName, category },
    collection: 'somedays',
    successFunction: () => {
      refreshStuffs
    },
  })

  const { response, refresh } = useAxiosInit({
    axiosConfig: { method: 'get', url: 'somedayCategories/list' },
  })

  useEffect(() => {
    if (response) {
      const categories = response.map(category => category.name)
      setCategories(['No category', ...categories])
    }
  }, [response])

  return (
    <div>
      <PctSelectAdd
        name="category"
        value={category?.category}
        onChange={(name, value) => setCategory({ [name]: value })}
        label="Category list"
        options={categories}
        addTitle="category"
        config={{ data: newCategory, collection: 'somedayCategories' }}
        successFunction={response => {
          setCategory({ name: response?.name })
          refresh()
        }}
        addForm={
          <div>
            <PctInput
              name="name"
              label="new category"
              value={newCategory?.value}
              onChange={(name, value) => setNewCategory({ [name]: value })}
            />
          </div>
        }
      />
      <button onClick={createSomeday}>Add to someday list</button>
    </div>
  )
}

export default CreateSomedays
