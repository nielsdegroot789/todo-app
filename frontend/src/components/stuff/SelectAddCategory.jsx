import React, { useEffect, useState } from 'react'
import useAdd from '../../hooks/useAxiosAdd'
import useAxiosInit from '../../hooks/useAxiosInit'
import PctInput from '../PctInput'
import PctSelectAdd from '../PctSelectAdd'

const SelectAddCategory = () => {
  const [categories, setCategories] = useState()
  const [category, setCategory] = useState()
  const [newCategory, setNewCategory] = useState()

  const { executeAdd } = useAdd({ data: category, collection: 'somedays' })

  const { response } = useAxiosInit({
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
      name="category"
      onChange={(name, value) => setCategory(name, value)}
      label="Category list"
      options={categories}
      addTitle="category"
      addSubmit={executeAdd}
      config={{ data: newCategory, collection: 'somedayCategory' }}
      form={
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

export default SelectAddCategory
