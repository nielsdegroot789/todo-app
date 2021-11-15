import React, { useEffect, useState } from 'react'
import useAdd from '../../hooks/useAxiosAdd'
import useAxiosInit from '../../hooks/useAxiosInit'
import PctInput from '../PctInput'
import PctSelectAdd from '../PctSelectAdd'

const CreateSomedays = () => {
  const [categories, setCategories] = useState()
  const [category, setCategory] = useState(null)
  const [newCategory, setNewCategory] = useState()

  const { executeAdd: createSomeday } = useAdd({ data: category, collection: 'somedays' })

  const { response, refresh } = useAxiosInit({
    axiosConfig: { method: 'get', url: 'somedayCategory/list' },
  })

  useEffect(() => {
    if (response) {
      const categories = response.map(category => category.name)
      setCategories(['No category', ...categories])
    }
  }, [response])

  return (
    <PctSelectAdd
      name="name"
      value={category?.name}
      onChange={(name, value) => setCategory({ [name]: value })}
      label="Category list"
      options={categories}
      addTitle="category"
      addSubmit={createSomeday}
      config={{ data: newCategory, collection: 'somedayCategory' }}
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
  )
}

export default CreateSomedays
