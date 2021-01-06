line 6 will log `[1, 2, 3]` because the array object referenced by `myOtherArray` was mutated when `myArray` called `pop()` on line 4. `myOther Array` being a constant doesn't prevent it from being mutated, only from being reassigned.

Line 10 will output the same thing as line 6 because `myOtherArray` is still referencing the same object. Only the variable `myArray` was reassigned to reference a difference object.
