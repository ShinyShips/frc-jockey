import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export type pointsAdded = {
  auto_passed_start_line: boolean,
  auto_coral_place_l1_count: number,
  auto_coral_place_l2_count: number,
  auto_coral_place_l3_count: number,
  auto_coral_place_l4_count: number,
  teleop_coral_place_l1_count: number,
  teleop_coral_place_l2_count: number,
  teleop_coral_place_l3_count: number,
  teleop_coral_place_l4_count: number,
  teleop_algae_place_net_shot: number,
  teleop_algae_place_processor: number,
  shallow_climb_attempted: boolean,
  deep_climb_attempted: boolean,
  park_attempted: boolean,
  climb_failed: boolean,
}

export type autoPointsAdded = {
  auto_passed_start_line: boolean,
  auto_coral_place_l1_count: number,
  auto_coral_place_l2_count: number,
  auto_coral_place_l3_count: number,
  auto_coral_place_l4_count: number,
  auto_algae_place_net_shot: number,
  auto_algae_place_processor: number,
}

export type teleopPointsAdded = {
  teleop_coral_place_l1_count: number,
  teleop_coral_place_l2_count: number,
  teleop_coral_place_l3_count: number,
  teleop_coral_place_l4_count: number,
  teleop_algae_place_net_shot: number,
  teleop_algae_place_processor: number,
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertToLeavePoints(left: boolean) {
  return left ? 3 : 0
}

export function convertToAutoL1Points(amountOfCoral: number) {
  return amountOfCoral * 3
}

export function convertToAutoL2Points(amountOfCoral: number) {
  return amountOfCoral * 4
}

export function convertToAutoL3Points(amountOfCoral: number) {
  return amountOfCoral * 6
}
export function convertToAutoL4Points(amountOfCoral: number) {
  return amountOfCoral * 7
}

export function convertToTeleopL1Points(amountOfCoral: number) {
  return amountOfCoral * 2
}

export function convertToTeleopL2Points(amountOfCoral: number) {
  return amountOfCoral * 3
}

export function convertToTeleopL3Points(amountOfCoral: number) {
  return amountOfCoral * 5
}

export function convertToTeleopL4Points(amountOfCoral: number) {
  return amountOfCoral * 5
}

export function convertToNetPoints(amountOfAlgae: number) {
  return amountOfAlgae * 4
}

export function convertToProcessorPoints(amountOfAlgae: number) {
  return amountOfAlgae * 2
}

export function convertToParkPoints(parked: boolean) {
  return parked ? 2 : 0
}

export function convertToShallowCagePoints(climbed: boolean) {
  return climbed ? 6 : 2
}

export function convertToDeepCagePoints(climbed: boolean) {
  return climbed ? 12 : 2
}

export function calculateMatchPointsAdded(data: pointsAdded) {
  let climbPoints = 0;

  if (data.deep_climb_attempted) {
    climbPoints = convertToDeepCagePoints(!data.climb_failed)
  } else if (data.shallow_climb_attempted) {
    climbPoints = convertToShallowCagePoints(!data.climb_failed)
  } else if (data.park_attempted) {
    climbPoints = convertToParkPoints(!data.climb_failed)
  }

  return convertToLeavePoints(data.auto_passed_start_line) +
    convertToAutoL1Points(data.auto_coral_place_l1_count) +
    convertToAutoL2Points(data.auto_coral_place_l2_count) +
    convertToAutoL3Points(data.auto_coral_place_l3_count) +
    convertToAutoL4Points(data.auto_coral_place_l4_count) +
    convertToTeleopL1Points(data.teleop_coral_place_l1_count) +
    convertToTeleopL2Points(data.teleop_coral_place_l2_count) +
    convertToTeleopL3Points(data.teleop_coral_place_l3_count) +
    convertToTeleopL4Points(data.teleop_coral_place_l4_count) +
    convertToNetPoints(data.teleop_algae_place_net_shot) +
    convertToProcessorPoints(data.teleop_algae_place_processor) +
    climbPoints;
}

export function calculateMatchAutoPoints(data: autoPointsAdded) {
  return convertToLeavePoints(data.auto_passed_start_line) +
    convertToAutoL1Points(data.auto_coral_place_l1_count) +
    convertToAutoL2Points(data.auto_coral_place_l2_count) +
    convertToAutoL3Points(data.auto_coral_place_l3_count) +
    convertToAutoL4Points(data.auto_coral_place_l4_count) +
    convertToNetPoints(data.auto_algae_place_net_shot) +
    convertToProcessorPoints(data.auto_algae_place_processor)
}

export function calculateMatchTeleopPoints(data: teleopPointsAdded) {
  return convertToTeleopL1Points(data.teleop_coral_place_l1_count) +
    convertToTeleopL2Points(data.teleop_coral_place_l2_count) +
    convertToTeleopL3Points(data.teleop_coral_place_l3_count) +
    convertToTeleopL4Points(data.teleop_coral_place_l4_count) +
    convertToNetPoints(data.teleop_algae_place_net_shot) +
    convertToProcessorPoints(data.teleop_algae_place_processor)
}

export function calculateOverallPointsAdded(data: number[]){
  return data.reduce((acc, curr) => acc + curr)
}

export function percentCrossed(data: boolean[]) {
  return data.filter((crossed) => crossed).length / data.length
}