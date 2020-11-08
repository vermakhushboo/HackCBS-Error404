import pandas as pd
df = pd.read_csv('data/nin-health-facilities.csv', engine='python')
df = df[ df.latitude != '\\N'][df.longitude != '\\N']
df = df[ df.latitude != '0'][df.longitude != '0']

def shortest_entry(lat, long):
    dis = ( (df.latitude.astype('float') - lat )**2 + (df.longitude.astype('float') - long )**2 )** 0.5
   
    return zip(df.columns, df.loc[dis.idxmin()].astype('str').values)


