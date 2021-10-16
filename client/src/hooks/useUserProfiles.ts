import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getUser, getUserId } from 'reducks/users/selectors';
import { axiosBase } from 'util/api';
import { ErrorStatus } from 'util/types/hooks/errors';
import { RequestHeaders, UserProfile } from 'util/types/hooks/users';
import { Users } from 'util/types/redux/users';

import DefaultIcon from '../assets/img/DefaultIcon.jpg';

const useUserProfiles = (paramsId: string) => {
  const selector = useSelector((state: { users: Users }) => state)
  const loginUserId = getUserId(selector)

  const [activeNavTitle, setActiveNavTitle] = useState<'profile' | 'none'>('none')
  const [errorMessageInProfile, setErrorMessageInProfile] = useState('')
  const [userProfile, setUserProfile] = useState<UserProfile>()
  const [initialStatus, setInitialStatus] = useState<'following' | 'requestingByMe' | 'requestedToMe' | 'default'>(
    'default',
  )

  const getUserProfile = () => {
    if (paramsId === loginUserId) {
      setActiveNavTitle('profile')
    } else {
      setActiveNavTitle('none')
    }
    setErrorMessageInProfile('')

    const loginUser = getUser(selector)
    const requestHeaders: RequestHeaders = {
      'access-token': loginUser.accessToken,
      client: loginUser.client,
      uid: loginUser.uid,
    }

    axiosBase
      .get<UserProfile>(`/v1/users/${paramsId}`, { headers: requestHeaders })
      .then((response) => {
        const userData = response.data
        userData.icon_url = userData.icon_url == null ? DefaultIcon : userData.icon_url
        setUserProfile(userData)

        if (userData.following) {
          setInitialStatus('following')
        } else if (userData.follow_request_sent_to_me) {
          setInitialStatus('requestedToMe')
        } else if (userData.follow_requet_sent_by_me) {
          setInitialStatus('requestingByMe')
        } else {
          setInitialStatus('default')
        }
      })
      .catch((error: ErrorStatus) => {
        const { status } = error.response
        if (status === 400) {
          setErrorMessageInProfile('このアカウントは存在しません。')
        } else if (String(status).indexOf('5') === 0) {
          setErrorMessageInProfile('接続が失われました。確認してからやりなおしてください。')
        } else {
          setErrorMessageInProfile('不明なエラーが発生しました。')
        }
      })
  }

  return { getUserProfile, activeNavTitle, errorMessageInProfile, userProfile, initialStatus }
}

export default useUserProfiles