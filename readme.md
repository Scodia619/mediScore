Calculates the Medi Score of a Patient based on observations.

Takes in 5 core observations which are monitored and the score adjusted according. Two optional parameters
have been added which are time since last ate either 1 and 0 1 being eaten within the last two hours and cbg.

I have set up a function which checks two scores regardless of time and see if they have elevated by at least two.
This is done in a seperate function as you would need to call it based on when the second set of obvs is done and
then compare them.

I have setup Jest to confirm the output of the function based on the examples provided.