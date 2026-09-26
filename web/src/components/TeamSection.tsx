import React, { useState } from 'react';
import { Users, Calendar, Award, CheckCircle2, ChevronDown, ChevronUp, Clock, MapPin } from 'lucide-react';
import { TEAM_MEMBERS, MEETING_MINUTES, TeamMember, MeetingMinute } from '../core/fanData';

export const TeamSection: React.FC = () => {
  const [selectedMeetingNo, setSelectedMeetingNo] = useState<number>(1);
  const [showAllMinutes, setShowAllMinutes] = useState<boolean>(false);

  const selectedMeeting =
    MEETING_MINUTES.find((m) => m.meetingNo === selectedMeetingNo) || MEETING_MINUTES[0];

  return (
    <section id="team" className="py-12 bg-slate-950 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-emerald text-xs font-semibold">
            <Users className="w-3.5 h-3.5" />
            <span>Group 4 – Tech Pioneers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Academic Research Team &amp; Meeting Archives
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Under the Department of Materials Science &amp; Engineering at the University of Moratuwa,
            the Tech Pioneers designed, modeled, and manufactured the Smart-Breeze automated fan.
          </p>
        </div>

        {/* Member Directory Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.index}
              className={`glass-panel rounded-3xl p-4 text-center border transition-all hover-lift flex flex-col justify-between items-center ${
                member.isLeader
                  ? 'border-teal-400 bg-teal-950/20 ring-1 ring-teal-400/50 shadow-lg'
                  : member.isInstructor
                  ? 'border-purple-400/60 bg-purple-950/20'
                  : 'border-slate-800'
              }`}
            >
              <div className="flex flex-col items-center">
                {/* Circular Portrait */}
                <div className={`relative w-20 h-20 rounded-full overflow-hidden p-0.5 mb-3 shadow-md ${
                  member.isLeader ? 'ring-2 ring-teal-400' : member.isInstructor ? 'ring-2 ring-purple-400' : 'ring-1 ring-slate-700'
                }`}>
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>

                {/* Badges */}
                {member.isLeader && (
                  <span className="badge-teal text-[10px] font-bold px-2 py-0.5 rounded-full mb-1">
                    ★ Team Leader
                  </span>
                )}
                {member.isInstructor && (
                  <span className="badge-purple text-[10px] font-bold px-2 py-0.5 rounded-full mb-1 bg-purple-500/20 text-purple-300 border border-purple-500/40">
                    Faculty Supervisor
                  </span>
                )}

                <h4 className="text-xs font-bold text-white leading-tight">
                  {member.shortName}
                </h4>

                <span className="font-mono text-[10px] text-teal-400 font-bold mt-0.5">
                  {member.index}
                </span>

                <p className="text-[10px] text-slate-400 mt-1 leading-snug">
                  {member.role}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 w-full mt-3 text-[10px] text-slate-500">
                <span className="text-slate-400 font-semibold block">Stakeholder:</span>
                <span className="truncate block text-slate-300">{member.stakeholderAssigned}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Chronological Meeting Minutes Archive */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-teal-500/30 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-teal-400" />
                <h3 className="text-xl font-bold text-white">
                  Chronological Meeting Minutes (Appendix 8.3)
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Official records of the 7 project sessions held between March 13 and June 3, 2023.
              </p>
            </div>

            {/* Quick Meeting Selector Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {MEETING_MINUTES.map((m) => (
                <button
                  key={m.meetingNo}
                  onClick={() => setSelectedMeetingNo(m.meetingNo)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    selectedMeetingNo === m.meetingNo
                      ? 'bg-teal-500 text-white shadow-xs'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  Meeting #{m.meetingNo}
                </button>
              ))}
            </div>
          </div>

          {/* Active Meeting Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-950/60 p-5 rounded-2xl border border-slate-800">
            <div className="lg:col-span-4 space-y-3 border-b lg:border-b-0 lg:border-r border-slate-800 pb-4 lg:pb-0 lg:pr-4 text-xs">
              <div className="space-y-1">
                <span className="badge-teal text-[10px] font-mono px-2 py-0.5 rounded-md font-bold">
                  Meeting #{selectedMeeting.meetingNo}
                </span>
                <h4 className="text-base font-bold text-white mt-1">
                  {selectedMeeting.date}
                </h4>
                <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{selectedMeeting.time}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-teal-400" />
                  <span>{selectedMeeting.mode}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[11px] space-y-1">
                <div><span className="text-slate-400">Team Leader:</span> <strong className="text-white">{selectedMeeting.teamLeader}</strong></div>
                <div><span className="text-slate-400">Convener:</span> <strong className="text-white">{selectedMeeting.convener}</strong></div>
                <div><span className="text-slate-400">Attendees:</span> <strong className="text-teal-300">{selectedMeeting.attendeesCount} / 9 Members</strong></div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 text-xs">
              <div>
                <span className="font-bold text-slate-400 uppercase tracking-wider block text-[10px] mb-1">
                  Agenda Topics &amp; Goals:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedMeeting.agenda.map((item, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 text-[11px]">
                      • {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-bold text-teal-400 uppercase tracking-wider block text-[10px] mb-1">
                  Decisions &amp; Key Minutes:
                </span>
                <ul className="space-y-2 text-slate-300">
                  {selectedMeeting.keyDecisions.map((dec, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-900/40 p-2 rounded-xl border border-slate-800/60">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{dec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
