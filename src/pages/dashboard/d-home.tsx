import 'react-big-calendar/lib/css/react-big-calendar.css'

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux-toolkit/hooks'
import {
  getRoomBookingThunk,
  selectRoomBookingState,
} from '../../redux-toolkit/room/room-slice'

import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import { th } from 'date-fns/locale'
import { Event } from '../../app-types/room-booking.type'

const locales = {
  'th-TH': th,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})
function DHome() {
  const dispatch = useAppDispatch()
  const { roomBooking } = useAppSelector(selectRoomBookingState)

  useEffect(() => {
    dispatch(getRoomBookingThunk())
  }, [])

  const onSelectEvent = (calEvent: any) => {
    // alert(JSON.stringify(calEvent));
    let data = {
      id: calEvent.id,
      title: calEvent.title,
      start: format(Date.parse(calEvent.start), 'dd MMM yyyy HH:mm:ss', {
        locale: th,
      }),
      end: format(Date.parse(calEvent.end), 'dd MMM yyyy HH:mm:ss', {
        locale: th,
      }),
      createdBy: calEvent.created_by,
    }

    alert(JSON.stringify(data))
  }

  let myEvents = roomBooking?.events.map((item: Event) => {
    return {
      id: item.id,
      title: item.title,
      start: new Date(item.start),
      end: new Date(item.end),
      created_by: item.created_by,
    }
  })

  return (
    <>
      <h1>รายการจองห้องประชุมทั้งหมด</h1>
      <Calendar
        culture="th-TH"
        localizer={localizer}
        events={[...(myEvents != undefined ? myEvents : [])]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        onSelectEvent={onSelectEvent}
        views={['month', 'agenda', 'day', 'week']}
        formats={{
          dateFormat: 'd',
          monthHeaderFormat: 'dd MMM yyyy',
          timeGutterFormat: 'HH:mm',
        }}
      />
    </>
  )
}

export default DHome
