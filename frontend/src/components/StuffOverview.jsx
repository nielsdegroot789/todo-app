import React, { useEffect, useState } from 'react'
import SearchInput from './SearchInput'
import Stuff from './Stuff'
import DeleteStuffModal from './DeleteStuffModal'
import StuffForm from './StuffForm'
import EditStuffModal from './EditStuffModal'
import useAxiosInit from '../hooks/useAxiosInit'
import useAxiosManual from '../hooks/useAxiosManual'
import ActionableModal from './stuff/ActionableModal'

const StuffOverview = () => {
  const [searchText, setSearchText] = useState()
  const [stuff, setStuff] = useState({})
  const [stuffs, setStuffs] = useState()
  const [editStuff, setEditStuff] = useState()
  const [deleteId, setDeleteId] = useState()
  const [actionable, setActionable] = useState()

  // TODO: spinner
  const { response, loading, refresh } = useAxiosInit({
    axiosConfig: { method: 'get', url: 'stuffs/list', params: { search: searchText } },
  })

  const { execute: addStuff } = useAxiosManual({
    axiosConfig: {
      method: 'post',
      url: 'stuffs/add',
      data: stuff,
    },
    successMessage: 'Successfully added stuff',
    successFunction: refresh,
  })

  useEffect(() => {
    if (response) {
      setStuffs(response)
    }
  }, [response])

  const onChangeStuff = (name, value) => {
    setStuff({ ...stuff, [name]: value })
  }

  const onChangeEditStuff = (name, value) => {
    setEditStuff({ ...editStuff, [name]: value })
  }

  const search = searchText => {
    setSearchText(searchText)
  }

  useEffect(() => {
    refresh()
  }, [searchText])

  return (
    <div class="page-layout">
      <h1>Stuff</h1>
      <SearchInput setFilterText={search} />
      <StuffForm onSubmit={addStuff} state={stuff} onChange={onChangeStuff} />
      <div id="stuff-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          stuffs?.map(stuff => (
            <Stuff
              stuff={stuff}
              key={stuff._id}
              setActionable={setActionable}
              setEditStuff={setEditStuff}
              setDeleteId={setDeleteId}
            />
          ))
        )}
      </div>
      <EditStuffModal
        isVisible={editStuff}
        onClose={() => setEditStuff(null)}
        editStuff={editStuff}
        refresh={refresh}
        onChange={onChangeEditStuff}
      />
      <DeleteStuffModal
        isVisible={deleteId}
        onClose={() => setDeleteId(null)}
        todoId={deleteId}
        refresh={refresh}
      />
      <ActionableModal
        isVisible={actionable}
        stuffId={actionable}
        onClose={() => setActionable(null)}
        refresh={refresh}
      />
    </div>
  )
}

export default StuffOverview
