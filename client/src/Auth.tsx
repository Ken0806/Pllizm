import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStatusOfRightToUsePlizm, listenAuthState } from 'reducks/users/operations';
import { getIsSignedIn } from 'reducks/users/selectors';
import { Users } from 'util/types/redux/users';

const Auth: FC = ({ children }) => {
  const dispatch = useDispatch()

  const selector = useSelector((state: { users: Users }) => state)
  const isSignedIn = getIsSignedIn(selector)

  useEffect(() => {
    if (!isSignedIn) {
      dispatch(listenAuthState())
    } else {
      dispatch(getStatusOfRightToUsePlizm())
    }
  }, [dispatch, isSignedIn])

  if (!isSignedIn) return <></>

  return <>{children}</>
}

export default Auth
