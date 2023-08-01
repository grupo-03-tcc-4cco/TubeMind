import Avatar from 'components/Avatar'
import content from '../../../public/content'
import * as S from './styles'

export const AvatarGroup = () => {
  return (
    <S.AvatarGroup>
      {content.team.map((person) => (
        <Avatar
          key={person.name}
          userName={person.name}
          age={person.age}
          linkedinUrl={person.linkedinUrl}
          githubUrl={person.githubUrl}
          imageUrl={person.imageUrl}
        />
      ))}
    </S.AvatarGroup>
  )
}
