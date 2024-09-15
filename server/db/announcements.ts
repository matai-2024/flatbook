import { Announcement, AnnouncementData } from '../../types/Announcement.ts'
import db from './connection.ts'

export async function getAnnouncements(flatId: number) {
  const announcements: Announcement[] = await db('announcements')
    .where('flat_id', '=', flatId)
    .select(
      'id',
      'author_id as auth0Id',
      'flat_id as flatId',
      'title',
      'content',
      'created_at as createdAt',
    )

  return announcements
}

export async function addAnnouncement(data: AnnouncementData) {
  const { flatId, auth0Id, title, content, createdAt } = data
  return await db('announcements').insert(
    {
      flat_id: flatId,
      auth0_id: auth0Id,
      title: title,
      content: content,
      created_at: createdAt,
    },
    ['id'],
  )
}
