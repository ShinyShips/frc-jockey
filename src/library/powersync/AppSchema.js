import { column, Schema, Table } from '@powersync/web';
export var LISTS_TABLE = 'lists';
export var TODOS_TABLE = 'todos';
export var MATCHES_TABLE = 'matches';
export var TEAMS_TABLE = 'teams';
export var MATCH_TEAMS_TABLE = 'match_teams';
export var AUTO_TABLE = 'auto';
export var TELEOP_TABLE = 'teleop';
var todos = new Table({
    list_id: column.text,
    created_at: column.text,
    completed_at: column.text,
    description: column.text,
    created_by: column.text,
    completed_by: column.text,
    completed: column.integer
}, { indexes: { list: ['list_id'] } });
var lists = new Table({
    created_at: column.text,
    name: column.text,
    owner_id: column.text
});
var matches = new Table({
    id: column.text,
    match_number: column.integer,
    user_id: column.text,
});
var teams = new Table({
    id: column.text,
    team_number: column.integer,
    user_id: column.text,
});
var match_teams = new Table({
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
var auto = new Table({
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
var teleop = new Table({
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
export var AppSchema = new Schema({
    todos: todos,
    lists: lists,
    matches: matches,
    teams: teams,
    match_teams: match_teams,
    auto: auto,
    teleop: teleop,
});
