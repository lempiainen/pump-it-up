## Core concepts

#### Workout programs
* Has a target duration (in weeks)
* Consist of predifened workouts
* Can be active or inactive
* Progress can be tracked

#### Workouts in a program
* These are tied to a specific program
* Has designated weekday
	* Can these exist without a weekday?
* Consists of selected exercises
	* Tied information
		* reps / duration
		* sets
		* weight
		* rest period
	* Linked variants for exercices
		* eg. when the machine in the gym is taken

##### Exercises
* A named exercise, shared troughout the programs
	* These are the main source of trackable data
* Additional fields
	* Type
		* reps/duration
	* Icon?
	* Muscle groups?
	* Notes?
	* History?

## Behaviour during a workout
A step by step walktrough how a tracking a single workout should go.

1. User navigates to homescreen.
2. Current weekly workouts are visible and a next workout is highlighted
	1. It is based on the weekday
3. Select days workout
	1. It shows the overview/list with different exercises
	2. Button to "start" the workout (starts a timer)
4. Select an exercise to show more info / exercise view
5. Press start to "start" on selected exercise 
	1. You can adjust the weights at any point
6. After each set of reps, mark how many reps you did
	1. starts the "rest" timer
7. After all the sets are done you can select how hard the exercise was
	1. easy / ok / hard
8. After all the exercises are done, it stops the clock and shows a quick summary
	1. tbd.