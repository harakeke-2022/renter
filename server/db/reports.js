const connection = require('./connection')

function getReports (db = connection) {
  return db('reports')
    .select()
}

/// address from properties

function addReport (newReport, db = connection) {
  const { propertyId, address, rooms1, rooms2, rentTotal, rentUtilities, year1, year2, propertyManagedBy, rentIncreaseFrequency, aveIncrease, heatPump, insulation, fridge, curtains, oven, smokeAlarm, fireExtinguisher, petsOk, smokingOk, sublettingAllowed, responsiveRepairs, rentalManagement, repairs, sufficientNotice, rateRelationship } = newReport
  return db('reports')
    .insert({
      id: 1,
      property_id: propertyId,
      address,
      rooms_1: rooms1,
      rooms_2: rooms2,
      rent_total: rentTotal,
      rent_utilities: rentUtilities,
      year_1: year1,
      year_2: year2,
      property_managed_by: propertyManagedBy,
      rent_increase_frequency: rentIncreaseFrequency,
      ave_increase: aveIncrease,
      heat_pump: heatPump,
      insulation,
      fridge,
      curtains,
      oven,
      smoke_alarm: smokeAlarm,
      fire_extinguisher: fireExtinguisher,
      pets_ok: petsOk,
      smoking_ok: smokingOk,
      subletting_allowed: sublettingAllowed,
      responsive_repairs: responsiveRepairs,
      rental_management: rentalManagement,
      repairs,
      sufficient_notice: sufficientNotice,
      rate_relationship: rateRelationship
    })
}

module.exports = {
  getReports,
  addReport
}