from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your food list."}

@app.get("/food", tags=["food"])
async def get_todos() -> dict:
    return { "data": food }

food = [
    {
        "id": "1",
        "item": "Pizza"
    },
    {
        "id": "2",
        "item": "Pie"
    },
    {
        "id": "3",
        "item": "Cake"
    }
]   