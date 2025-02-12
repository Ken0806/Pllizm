import { LogoLink } from 'components/atoms';
import { IconWithTextLink } from 'components/molecules';
import { AccountLogoutPopover, CreatePostModal } from 'components/organisms';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    getHasRightToUsePllizm, getPerformedRefract, getUserId, getUserName
} from 'reducks/users/selectors';
import { Users } from 'util/types/redux/users';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Hidden, Theme } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import LogoIconActive from '../../assets/img/LogoIconActive1.png';
import LogoIconInactive from '../../assets/img/LogoIconInactive1.png';
import { getIcon } from '../../reducks/users/selectors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      position: 'fixed',
      top: 0,
      zIndex: 1,
      backgroundColor: '#333333',
      height: 49,
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.up('sm')]: {
        width: '600px',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100vw',
      },
    },
    nav: {
      position: 'fixed',
      top: 8,
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up('lg')]: {
        alignItems: 'flex-start',
      },
      [theme.breakpoints.down('lg')]: {
        alignItems: 'center',
      },
    },
    main: {
      marginTop: 49,
    },
    bottom: {
      order: 3,
      position: 'fixed',
      bottom: 24,
      [theme.breakpoints.up('lg')]: {
        width: 240,
      },
    },
    logoIcon: {
      width: 26.25,
    },
    container: {
      display: 'flex',
      minHeight: '100vh',
      [theme.breakpoints.up('lg')]: {
        width: '1200px',
        margin: '0 auto',
      },
      [theme.breakpoints.down('lg')]: {
        width: '100%',
      },
    },
    navContainer: {
      order: 1,
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      [theme.breakpoints.up('lg')]: {
        marginRight: 40,
      },
      [theme.breakpoints.down('lg')]: {
        marginRight: 16,
        minWidth: 64,
      },
    },
    asideContainer: {
      order: 3,
      [theme.breakpoints.up('lg')]: {
        marginLeft: '24px',
        flex: 1,
      },
      [theme.breakpoints.down('lg')]: {
        flex: 1,
      },
    },
    mainContainer: {
      order: 2,
      [theme.breakpoints.up('sm')]: {
        borderRight: '1px solid #EEEEEE',
        borderLeft: '1px solid #EEEEEE',
        width: '602px',
      },
      [theme.breakpoints.down('sm')]: {
        minWidth: '100vw',
        width: '100%',
      },
    },
    footerText: {
      fontSize: 13,
      color: theme.palette.text.disabled,
      marginRight: 16,
    },
    bottomNavContainer: {
      position: 'fixed',
      bottom: 0,
      [theme.breakpoints.up('sm')]: {
        width: '600px',
      },
      [theme.breakpoints.down('sm')]: {
        minWidth: '100vw',
        width: '100%',
      },
    },
    createPostModalContainer: {
      [theme.breakpoints.up('lg')]: {
        width: '120%',
        marginLeft: -16,
      },
      [theme.breakpoints.down('lg')]: {
        marginLeft: -10,
      },
    },
    createPostModalContainerOfMobile: {
      position: 'fixed',
      right: 24,
      bottom: 95,
    },
  }),
)

type Props = {
  activeNavTitle: 'home' | 'search' | 'notification' | 'refract' | 'profile' | 'settings' | 'none'
  Header: React.ReactNode
  Bottom: React.ReactNode
}

const DefaultTemplate: FC<Props> = ({ children, activeNavTitle, Header, Bottom }) => {
  const classes = useStyles()
  const selector = useSelector((state: { users: Users }) => state)
  const userId = getUserId(selector)
  const userName = getUserName(selector)
  const userIcon = getIcon(selector)
  const hasRightToUsePllizm = getHasRightToUsePllizm(selector)
  const performedRefract = getPerformedRefract(selector)

  const isActiveOfHome = activeNavTitle === 'home'
  const isActiveOfSearch = activeNavTitle === 'search'
  const isActiveOfNotification = activeNavTitle === 'notification'
  const isActiveOfRefract = activeNavTitle === 'refract'
  const isActiveOfProfile = activeNavTitle === 'profile'
  const isActiveOfSettings = activeNavTitle === 'settings'

  const handleOnClickToHome = () => {
    window.location.href = '/home'
  }

  return (
    <Box sx={{ backgroundColor: '#f9f4ef', minHeight: '100vh' }}>
      <Box className={classes.container}>
        <Box className={classes.mainContainer}>
          <header className={classes.header}>{Header}</header>
          <main className={classes.main}>{children}</main>
          <Box className={classes.bottomNavContainer}>{Bottom}</Box>
          {hasRightToUsePllizm && performedRefract && (
            <Hidden smUp>
              <Box className={classes.createPostModalContainerOfMobile}>
                <CreatePostModal />
              </Box>
            </Hidden>
          )}
        </Box>
        <Hidden smDown>
          <Box className={classes.navContainer}>
            <nav className={classes.nav}>
              <Box mb={1}>
                <LogoLink width={30} onClick={handleOnClickToHome} />
              </Box>
              {hasRightToUsePllizm && performedRefract && (
                <Box mb={1}>
                  <IconWithTextLink title="ホーム" path="/home" isActive={isActiveOfHome}>
                    <HomeRoundedIcon sx={{ fontSize: 26.25 }} />
                  </IconWithTextLink>
                </Box>
              )}
              {performedRefract && (
                <Box mb={1}>
                  <IconWithTextLink title="検索" path="/search" isActive={isActiveOfSearch}>
                    <SearchIcon sx={{ fontSize: 26.25 }} />
                  </IconWithTextLink>
                </Box>
              )}
              {performedRefract && (
                <Box mb={1}>
                  <IconWithTextLink title="通知" path="/notifications" isActive={isActiveOfNotification}>
                    <NotificationsNoneRoundedIcon sx={{ fontSize: 26.25 }} />
                  </IconWithTextLink>
                </Box>
              )}
              {hasRightToUsePllizm && performedRefract && (
                <Box mb={1}>
                  <IconWithTextLink title="リフラクト" path="/refracted_posts" isActive={isActiveOfRefract}>
                    {isActiveOfRefract && <img src={LogoIconActive} alt="ロゴアイコン" className={classes.logoIcon} />}
                    {!isActiveOfRefract && (
                      <img src={LogoIconInactive} alt="ロゴアイコン" className={classes.logoIcon} />
                    )}
                  </IconWithTextLink>
                </Box>
              )}
              {performedRefract && (
                <Box mb={1}>
                  <IconWithTextLink title="プロフィール" path={`/users/${userId}`} isActive={isActiveOfProfile}>
                    <PersonIcon sx={{ fontSize: 26.25 }} />
                  </IconWithTextLink>
                </Box>
              )}
              <Box mb={2}>
                <IconWithTextLink title="設定" path="/settings/account" isActive={isActiveOfSettings}>
                  <SettingsIcon sx={{ fontSize: 26.25 }} />
                </IconWithTextLink>
              </Box>
              {hasRightToUsePllizm && performedRefract && (
                <Box className={classes.createPostModalContainer}>
                  <CreatePostModal />
                </Box>
              )}
              <Hidden lgUp>
                <Box className={classes.bottom}>
                  <AccountLogoutPopover userName={userName} userId={userId} icon={userIcon} />
                </Box>
              </Hidden>
            </nav>
          </Box>
        </Hidden>
        <Box className={classes.asideContainer}>
          <Hidden lgDown>
            <Box className={classes.bottom}>
              <AccountLogoutPopover userName={userName} userId={userId} icon={userIcon} />
              <footer>
                <Box component="ul" display="flex" flexWrap="wrap" mt={3}>
                  <li className={classes.footerText}>
                    <a href="https://form.run/@pllizmjp">お問い合わせ</a>
                  </li>
                  <li className={classes.footerText}>
                    <Link to="/help/terms_of_use" data-testid="terms-of-use-link">
                      利用規約
                    </Link>
                  </li>
                  <li className={classes.footerText}>
                    <Link to="/help/privacy_policy" data-testid="privacy-policy-link">
                      プライバシーポリシー
                    </Link>
                  </li>
                </Box>
                <small className={classes.footerText}>&copy; 2021 Pllizm</small>
              </footer>
            </Box>
          </Hidden>
        </Box>
      </Box>
    </Box>
  )
}

export default DefaultTemplate
