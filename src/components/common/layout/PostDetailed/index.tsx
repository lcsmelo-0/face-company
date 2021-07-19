import { UserPostsList } from 'app-models'

interface PostDetailedProperties {
  data: UserPostsList
}

export const PostDetailed: React.FC<PostDetailedProperties> = ({ data }: PostDetailedProperties) => {
  return <div>{data.title}</div>
}
