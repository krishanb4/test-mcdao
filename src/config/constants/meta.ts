import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'McDao Finance',
  description:
    'The most popular AMM on BSC by user count! Earn MCDAO through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by McDao Finance), NFTs, and more, on a platform you can trust.',
  image: 'https://mcdao.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('McDao Finance')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('McDao Finance')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('McDao Finance')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('McDao Finance')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('McDao Finance')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('McDao Finance')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('McDao Finance')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('McDao Finance')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('McDao Finance')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('McDao Finance')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('McDao Finance')}`,
      }
    default:
      return null
  }
}
