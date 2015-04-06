# Areacode (US only)
Basic package for extracting area code information from phone numbers and area codes

### Usage

####byCode(3 Digit Number)
>**Success:** *Returns information about given area code* 

>**Error:** *Returns false*

####byNumber(Phone Number - [*E.164*](http://en.wikipedia.org/wiki/E.164))
>**Success:** *Returns information about the provided phone number's areacode*

 >**Error:** *Returns false*
 
####extractFromNumber(Phone Number, [E.164](http://en.wikipedia.org/wiki/E.164))
>**Success:** *Returns 3 digit area code extracted from provided phone number*

>**Error:** *Returns false*

####Area Code Example Object

	{
	    "areacode": "534",
	    "timezone_offset": -6,
	    "dst": true,
	    "primary_timezone": "CST",
	    "timezones": [
	        "CST"
	    ],
	    "state": "Wisconsin",
	    "state_abbrv": "WI"
	}

 - **areacode** (*string*):   3 digit area code
 - **timezone_offset** (*integer*): hour offset of GMT
 - **dst** (*boolean*): whether day light savings is used
 - **primary_timezone** (*string*): common timezone code
 - **timezones** (*array*): some area codes cross over timezones, this will list all when present
 - **state** (*string*): full name of the primary state in which the area code resides
 - **state_abbrv** (*string*): Two character abbreviation of the state

#### Tests
To run tests

    make test

