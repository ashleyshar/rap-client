import { useTranslation } from 'react-i18next'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TextField, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core'
import { doUpdateAccount } from 'actions/account'


function EditMyAccountDialog({ handleClose }: { handleClose: (isOk: boolean) => void }) {
  const [pwd, setPwd] = useState('')
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const {t} = useTranslation()
  const onSubmit = () => {
    dispatch(doUpdateAccount({ fullname: name, password: pwd }, isOk => {
      if (isOk) {
        handleClose(true)
      }
    }))
  }
  return (
    <Dialog open={true} onClose={() => handleClose(false)} style={{ width: 600 }}>
      <DialogTitle>{t('Modify profile')}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus={true}
          margin="dense"
          label={t('Change the password')}
          type="password"
          fullWidth={true}
          placeholder={t('Do not change the empty can')}
          onChange={e => setPwd(e.target.value)}
          value={pwd}
        />
        <TextField
          autoFocus={true}
          margin="dense"
          label={t('Modify the nickname')}
          fullWidth={true}
          placeholder={t('Do not change the empty can')}
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(false)} color="secondary">
          {t('cancel')}
        </Button>
        <Button
          color="primary"
          onClick={onSubmit}
        >
          {t('confirm')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditMyAccountDialog
