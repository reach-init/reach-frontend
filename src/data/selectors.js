import { createSelector } from 'reselect';
import { Schedule, Session, ScheduleGroup } from '../models/Schedule';

const getSchedule = (state) => {

  return state.data.schedule
};
export const getSpeakers = (state ) => state.data.speakers;
const getSessions = (state ) => state.data.sessions;
const getFilteredTracks = (state ) => state.data.filteredTracks;
const getFavoriteIds = (state ) => state.data.favorites;
const getSearchText = (state ) => state.data.searchText;

export const getFilteredSchedule = createSelector(
  getSchedule, getFilteredTracks,
  (schedule, filteredTracks) => {
    const groups = [];
    schedule.groups.forEach(group => {
      const sessions = [];
      group.sessions.forEach(session => {
        session.tracks.forEach(track => {
          if (filteredTracks.indexOf(track) > -1) {
            sessions.push(session);
          }
        })
      })
      if (sessions.length) {
        const groupToAdd = {
          time: group.time,
          sessions
        }
        groups.push(groupToAdd);
      }
    });

    return {
      date: schedule.date,
      groups
    } ;
  }
);

export const getSearchedSchedule = createSelector(
  getFilteredSchedule, getSearchText,
  (schedule, searchText) => {
    if (!searchText) {
      return schedule;
    }
    const groups = [];
    schedule.groups.forEach(group => {

      const sessions = group.sessions.filter(s => s.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
      if (sessions.length) {
        const groupToAdd = {
          time: group.time,
          sessions
        }
        groups.push(groupToAdd);
      }
    });
    return {
      date: schedule.date,
      groups
    }  
  }
)

export const getScheduleList = createSelector(
  getSearchedSchedule,
  (schedule) => schedule
);

export const getGroupedFavorites = createSelector(
  getScheduleList, getFavoriteIds,
  (schedule, favoriteIds) => {
    const groups  = [];
    schedule.groups.forEach(group => {
      const sessions = group.sessions.filter(s => favoriteIds.indexOf(s.id) > -1)
      if (sessions.length) {
        const groupToAdd  = {
          time: group.time,
          sessions
        }
        groups.push(groupToAdd);
      }
    });
    return {
      date: schedule.date,
      groups
    }  
  }
);


const getIdParam = (_state , props: any) => {
  return props.match.params['id'];
}

export const getSession = createSelector(
  getSessions, getIdParam,
  (sessions, id) => {
    return sessions.find(s => s.id === id);
  }
);

export const getSpeaker = createSelector(
  getSpeakers, getIdParam,
  (speakers, id) => speakers.find(x => x.id === id)
);

export const getSpeakerSessions = createSelector(
  getSessions,
  (sessions) => {
    const speakerSessions = {};

    sessions.forEach(session => {
      session.speakerNames && session.speakerNames.forEach(name => {
        if (speakerSessions[name]) {
          speakerSessions[name].push(session);
        } else {
          speakerSessions[name] = [session];
        }
      })
    });
    return speakerSessions;
  }
);

export const mapCenter = (state ) => {
  const item = state.data.locations.find(l => l.id === state.data.mapCenterId);
  if (item == null) {
    return {
      id: 1,
      name: 'Map Center',
      lat: 43.071584,
      lng: -89.380120
    };
  }
  return item;
}
