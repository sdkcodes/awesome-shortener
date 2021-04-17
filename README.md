# AweShort (Awesome Shortener)

AweShort is a URL shortening service that you can use quickly setup to help you create short urls for your website.

## Installation

Clone the repo straight from GitHub

Install the dependencies

```bash
npm install
```
Create a new file `.env` in the root directory

Copy the content of the `.env.sample` file and paste into the `.env` you have created.

You can update the .env variables to match your requirements

## Run app in development mode
``` npm run dev```

## Run on production
` npm run start`

## API Usage

You can use the service to create a new short url by calling the api endpoint. Check below documentation for api usage:

*** Create short url ***
----
Creates a short url for a given url.

* **URL**

  /api/shorten

* **Method:**

  `POST`
  
*  **URL Params**


* **Body Params**

  **Required:**

  `url=[string]`

* **Success Response:**

  * **Code:** 200

    **Content:** `{
    "status": "success",
    "message": "Url found",
    "data": {
        "id": 1,
        "full_url": "https://www.getcaron.co",
        "short_url": "http://eoagp.ly/knlzzvit",
        "short_code": "knlzzvit",
        "clicks": 0,
        "createdAt": "2021-04-17T17:12:05.719Z",
        "updatedAt": "2021-04-17T17:48:44.273Z"
    }
}`
 

## Running Tests

`npm run test`


## License
[MIT](https://choosealicense.com/licenses/mit/)