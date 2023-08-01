import IconButton from '@mui/material/IconButton'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import * as S from './styles'
import { Typography } from 'components/Typography'

interface AvatarProps {
  userName: string
  age: string
  imageUrl?: string
  linkedinUrl: string
  githubUrl: string
}

function stringAvatar(name: string) {
  if (typeof name !== 'string' || name.trim().length === 0) {
    return {
      children: ''
    }
  }
}
function Avatar({
  userName,
  age,
  imageUrl,
  linkedinUrl,
  githubUrl
}: AvatarProps) {
  return (
    <S.Avatar>
      <S.Circle {...stringAvatar(userName)} src={imageUrl} />{' '}
      <Typography
        mt={2}
        variant="paragraph"
      >{`${userName}, ${age}`}</Typography>
      <S.Icons>
        <IconButton href={linkedinUrl}>
          <LinkedInIcon />
        </IconButton>
        <IconButton href={githubUrl}>
          <GitHubIcon />
        </IconButton>
      </S.Icons>
    </S.Avatar>
  )
}

export type { AvatarProps }
export default Avatar
