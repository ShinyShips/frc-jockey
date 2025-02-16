import { column, Schema, Table } from '@powersync/web';
// import { match } from 'assert';

export const LISTS_TABLE = 'lists';
export const TODOS_TABLE = 'todos';
export const MATCHES_TABLE = 'matches';
export const TEAMS_TABLE = 'teams';
export const MATCH_TEAMS_TABLE = 'match_teams';
export const AUTO_TABLE = 'auto';
export const TELEOP_TABLE = 'teleop';
export const SCOUTING_DATA_TABLE = 'scouting_data';

const todos = new Table(
  {
    list_id: column.text,
    created_at: column.text,
    completed_at: column.text,
    description: column.text,
    created_by: column.text,
    completed_by: column.text,
    completed: column.integer
  },
  { indexes: { list: ['list_id'] } }
);

const lists = new Table({
  created_at: column.text,
  name: column.text,
  owner_id: column.text
});

const matches = new Table({
  id: column.text,
  match_number: column.integer,
  user_id: column.text,
  event: column.text,
});

const teams = new Table({
  id: column.text,
  team_number: column.integer,
  user_id: column.text,
});

const match_teams = new Table({
  id: column.text,
  match_id: column.text,
  team_id: column.text,
  user_id: column.text,
  alliance: column.text,
  scouter_initials: column.text,
  shallow_climb_attempted: column.text,
  deep_climb_attempted: column.text,
  park_attempted: column.text,
  climb_failed: column.text,
  played_defense: column.text,
  broke_down: column.text,
  comment: column.text,
});

const auto = new Table({
  id: column.text,
  match_team_id: column.text,
  passed_start_line: column.text,
  pos1: column.text,
  pos2: column.text,
  pos3: column.text,
  pos4: column.text,
  pos5: column.text,
  pos6: column.text,
  place_l1_count: column.integer,
  place_l2_count: column.integer,
  place_l3_count: column.integer,
  place_l4_count: column.integer,
  place_drop_miss_count: column.integer,
  pick_station_count: column.integer,
  place_net_shot: column.integer,
  place_processor: column.integer,
  place_drop_miss: column.integer,
  pick_reef_count: column.integer,
  pick_carpet_count: column.integer,
});

const teleop = new Table({
  id: column.text,
  match_team_id: column.text,
  passed_start_line: column.text,
  place_l1_count: column.integer,
  place_l2_count: column.integer,
  place_l3_count: column.integer,
  place_l4_count: column.integer,
  place_drop_miss_count: column.integer,
  pick_station_count: column.integer,
  place_net_shot: column.integer,
  place_processor: column.integer,
  place_drop_miss: column.integer,
  pick_reef_count: column.integer,
  pick_carpet_count: column.integer,
});

// const scouting = new Table({
//   id: column.text,
//   match_id: column.text,
//   team_id: column.text,
//   user_id: column.text,
//   alliance: column.text,
//   scouter_initials: column.text,
//   shallow_climb_attempted: column.text,
//   deep_climb_attempted: column.text,
//   park_attempted: column.text,
//   climb_failed: column.text,
//   played_defense: column.text,
//   broke_down: column.text,
//   comment: column.text,

//   //auto
//   auto_passed_start_line: column.text,
//   start_poses0: column.text,
//   start_poses1: column.text,
//   start_poses2: column.text,
//   start_poses3: column.text,
//   start_poses4: column.text,
//   start_poses5: column.text,
//   auto_coral_place_l1_count: column.integer,
//   auto_coral_place_l2_count: column.integer,
//   auto_coral_place_l3_count: column.integer,
//   auto_coral_place_l4_count: column.integer,
//   auto_coral_place_drop_miss_count: column.integer,
//   auto_coral_pick_station_count: column.integer,
//   auto_coral_place_net_shot: column.integer,
//   auto_coral_place_processor: column.integer,
//   auto_coral_place_drop_miss: column.integer,
//   auto_coral_pick_reef_count: column.integer,
//   auto_coral_pick_carpet_count: column.integer,

//   //telop
//   teleop_coral_place_l1_count: column.integer,
//   teleop_coral_place_l2_count: column.integer,
//   teleop_coral_place_l3_count: column.integer,
//   teleop_coral_place_l4_count: column.integer,
//   teleop_coral_place_drop_miss_count: column.integer,
//   teleop_coral_pick_station_count: column.integer,
//   teleop_coral_place_net_shot: column.integer,
//   teleop_coral_place_processor: column.integer,
//   teleop_coral_place_drop_miss: column.integer,
//   teleop_coral_pick_reef_count: column.integer,
//   teleop_coral_pick_carpet_count: column.integer


// })

const scouting_data = new Table(
  {
    // id column (text) is automatically included
    user_id: column.text,
    match_number: column.integer,
    alliance: column.text,
    scouter_initials: column.text,
    select_team: column.integer,
    event: column.text,
    start_poses0: column.integer,
    start_poses1: column.integer,
    start_poses2: column.integer,
    start_poses3: column.integer,
    start_poses4: column.integer,
    start_poses5: column.integer,
    auto_coral_place_l1_count: column.integer,
    auto_coral_place_l2_count: column.integer,
    auto_coral_place_l3_count: column.integer,
    auto_coral_place_l4_count: column.integer,
    auto_coral_place_drop_miss_count: column.integer,
    auto_coral_pick_station_count: column.integer,
    auto_coral_pick_mark1_count: column.integer,
    auto_coral_pick_mark2_count: column.integer,
    auto_coral_pick_mark3_count: column.integer,
    auto_algae_place_net_shot: column.integer,
    auto_algae_place_processor: column.integer,
    auto_algae_place_drop_miss: column.integer,
    auto_algae_pick_reef_count: column.integer,
    auto_algae_pick_mark1_count: column.integer,
    auto_algae_pick_mark2_count: column.integer,
    auto_algae_pick_mark3_count: column.integer,
    auto_passed_start_line: column.integer,
    teleop_coral_place_l1_count: column.integer,
    teleop_coral_place_l2_count: column.integer,
    teleop_coral_place_l3_count: column.integer,
    teleop_coral_place_l4_count: column.integer,
    teleop_coral_place_drop_miss_count: column.integer,
    teleop_coral_pick_station_count: column.integer,
    teleop_coral_pick_carpet_count: column.integer,
    teleop_algae_place_net_shot: column.integer,
    teleop_algae_place_processor: column.integer,
    teleop_algae_place_drop_miss: column.integer,
    teleop_algae_pick_reef_count: column.integer,
    teleop_algae_pick_carpet_count: column.integer,
    shallow_climb_attempted: column.integer,
    deep_climb_attempted: column.integer,
    park_attempted: column.integer,
    climb_failed: column.integer,
    played_defense: column.integer,
    broke_down: column.integer,
    comment: column.text
  },
  { indexes: {} }
);

export const AppSchema = new Schema({
  todos,
  lists,
  matches,
  teams,
  match_teams,
  auto,
  teleop,
  scouting_data,
});

export type Database = (typeof AppSchema)['types'];
export type TodoRecord = Database['todos'];
// OR:
// export type Todo = RowType<typeof todos>;

export type ListRecord = Database['lists'];
export type MatchRecord = Database['matches'];
export type TeamRecord = Database['teams'];
export type MatchTeamRecord = Database['match_teams'];
export type AutoRecord = Database['auto'];
export type TeleopRecord = Database['teleop'];
export type ScoutingDataRecord = Database['scouting_data'];