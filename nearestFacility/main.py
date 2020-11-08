import uvicorn
from fastapi import FastAPI
import ndt
import json
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get('/')
async def index():
    return {"text" : "Hello Masters"}

@app.get('/location/{location}')
async def get_location(location):
    lat, long = [float(x) for x in location.split(",")]
    print("client", lat, long)
    
    return ndt.shortest_entry(lat, long)

#if __name__ == "__main__":
#    uvicorn.run(app, host="127.0.0.1", port=8000)

