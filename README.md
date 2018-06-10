# FluidStack
FluidStack is a web app that enables users to design their schedule in a modular, intuitive, and flexible way.

![alt tag](http://res.cloudinary.com/dqtydsjjs/image/upload/v1528657145/Screen_Shot_2018-06-10_at_1.58.05_PM_vp0vgj.png)

## The Idea
The idea for FluidStack came about because I realized that many of the daily planners out right now are rather rigid in how they enable users to plan their day. I have a hard time sticking to schedules, which means when I miss one event on the schedule early in the day, the whole timetable is messed up. There needed to be a way to change your day schedule without having to edit each individual event.

> I wanted to make a web app that would allow users to design their schedule their day in a way that felt effortless.

Most schedule makers have drag and drop feature, which I would integrate into the app to make changing the order of events quicker.

Another problem I found that events needed to be continuous, in that it wasn't possible to schedule work on one "subject" multiple times broken up throughout the day. For example, if I wanted to study computer science for 2 hours in 30 minute stretches, I would have to make four **unique** "Study computer Science" cards at **specific** times throughout the day. 

## The Execution
To make the design as simple as possible, I found that every time a user created an event, only three criteria were needed:
1. **The Event:** this is the name or title of the event (ex. "Walk the dog")
2. **The Duration:** this is the timespan of the event (ex. 15 min)
3. **The Quantity:** this is the amount of times this event will be done throughout the day (ex. 4 times)

The *drag and drop* and *sorting* features were easily implemented using JQuery. I created one column for ordered events and one for unordered events. The unordered list would serve as a side area for events if users are unsure whether that event will fit into the schedule.

The columns were implemented with the Boostrap library. I tried using grid frameworks like css grid, pure flexbox, and Bulma (flexbox based), but none seemed to work well with the margins and padding I wanted, so I went back to my comfort zone and chose Boostrap. Bootstrap is a relatively heavy library, so if in the future I figure out how to avoid using it, I will.

## Summary and Future Development
- [x] Creation of event with proper label
- [x] Drag and Drop between ordered and unordered
- [x] Creation of correct number of events based on quantity
- [ ] Height of event is changed based on duration
- [ ] Allow users to schedule other periods (6, 12, or 18 hours)
- [ ] Have "popular" choices of events organized by type (ex. Eating category would have *Breakfast*, *Lunch*, and *Dinner*
