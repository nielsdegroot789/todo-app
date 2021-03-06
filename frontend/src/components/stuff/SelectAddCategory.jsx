import React, { useState } from 'react'
import useAdd from '../../hooks/useAdd'
import PctInput from '../PctInput'
import PctSelectAdd from '../PctSelectAdd'

const SelectAddCategory = () => {
  const [category, setCategory] = useState()
  const [newCategory, setNewCategory] = useState()

  const { executeAdd } = useAdd({ data: category, collection: 'somedays' })
  

  return (
    <PctSelectAdd
      name="category"
      onChange={(name, value) => setCategory(name, value)}
      label="Category list"
      options={['hallo', 'test']}
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
