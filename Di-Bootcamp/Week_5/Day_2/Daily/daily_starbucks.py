import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

starbucks = pd.read_csv('Daily\starbucks.csv', delimiter=',')
# 3

# 4
# starbucks.info()
# total_number = RangeIndex: 242 entries

# 5
# print(starbucks.columns)

# 6
# print(starbucks.index)

# 7.Determine the drink that contains the most amount of sugar on average
# print(starbucks["Beverage"][starbucks[" Sugars (g)"].max()])

# 8.Find out how many different drink categories there are. Use the nunique() function for this.
# print(starbucks["Beverage_category"].nunique())

# 9.Identify the 5 most frequent drink categories.
# print(starbucks.groupby(["Beverage_category"]).count())
# print(starbucks.sort_values(["Beverage"],ascending=False).groupby('Beverage_category').head(5))
# a = starbucks.groupby(["Beverage_category"]).count()
# print(a)
# print(a.sort_values(by='Beverage', ascending=False).head(5)['Beverage'])

# 10.Find out the average calorie content per drink category.
# print(starbucks.groupby("Beverage_category").mean("calorie"))

# 11.Create a new column ‘caffeine_to_calories’ that represents the ratio of caffeine to calories in each drink.

# starbucks['caffeine_to_calories'] = pd.to_numeric(starbucks['Caffeine (mg)']) / starbucks['Calories']

# 12/Find the drink category that, on average, has the highest ‘caffeine_to_calories’ ratio.
# averages = starbucks.groupby('Beverage_category')['caffeine_to_calories'].mean().to_frame()

# print(averages.sort_values(by='caffeine_to_calories', ascending=False).head(1))

# 13.Create a horizontal bar plot that shows the average ‘caffeine_to_calories’ ratio for each drink category. Use matplotlib’s barh() function for this.
# plot_13 = starbucks.groupby('Beverage_category')['caffeine_to_calories'].mean().to_frame()
# category = plot_13.index
# values = plot_13['caffeine_to_calories']

# fig = plt.figure(figsize=(10, 5))
 
# plt.barh(category, values, color='maroon')
# plt.xlabel("Caffeine to calories")
# plt.ylabel("Beverage label")

# 14. “What is the relationship between sugar and caffeine across different drink categories?”
coffeine = starbucks[' Sugars (g)']
sugar = starbucks['Caffeine (mg)']
cs = pd.DataFrame({
    'coffeine': coffeine,
    'sugar': sugar
})
cs
cs.plot()



plt.title('Coffeine and sugar')
plt.xlabel('Index') 
plt.ylabel('Values')  
plt.grid(True)
plt.legend(loc='upper right') 