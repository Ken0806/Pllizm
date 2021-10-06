export type PostsArrayOfMeAndFollowerResponse = {
  posts: Array<PostsOfMeAndFollowerRespose>
}

export type PostsOfMeAndFollowerRespose = {
  id: string
  locked?: boolean
  status: string
  content: string
  // eslint-disable-next-line camelcase
  posted_by: 'me' | 'follower'
  // eslint-disable-next-line camelcase
  user_id?: string
  // eslint-disable-next-line camelcase
  user_name?: string
  // eslint-disable-next-line camelcase
  icon_url?: string
  // eslint-disable-next-line camelcase
  image_url?: string
  // eslint-disable-next-line camelcase
  is_reply: boolean
  // eslint-disable-next-line camelcase
  likes_count?: number
  // eslint-disable-next-line camelcase
  replies_count: number
  // eslint-disable-next-line camelcase
  liked_by_current_user: boolean
  // eslint-disable-next-line camelcase
  created_at: string
}

export type PostsOfMeAndFollower = {
  status: string
  postedBy: 'me' | 'follower'
  userId?: string
  userName?: string
  iconUrl: string
  id: string
  content: string
  imageUrl?: string
  locked?: boolean
  isReply: boolean
  likesCount?: number
  repliesCount: number
  likedByCurrentUser: boolean
  createdAt: string
}

export type Posts = {
  status: string
  postedBy: 'me' | 'follower'
  userId?: string
  userName?: string
  iconUrl: string
  id: string
  content: string
  imageUrl?: string
  locked?: boolean
  isReply: boolean
  likesCount?: number
  repliesCount: number
  likedByCurrentUser: boolean
  createdAt: string
}

export type GetPostsOfMeAndFollowerAction = (posts: Array<PostsOfMeAndFollower>) => {
  type: string
  payload: Array<PostsOfMeAndFollower>
}

export type Reducer = (
  state: Array<Posts>,
  action: {
    type: string
    payload: Array<Posts>
  },
) => Array<Posts>