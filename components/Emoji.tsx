import twemoji from 'twemoji';

export default function Emoji({emoji}) {
  return (
    <span className='Emoji'
      dangerouslySetInnerHTML={
        {__html: twemoji.parse(emoji, {ext: '.svg', folder: 'svg'})}
      }
    />
  )
}
