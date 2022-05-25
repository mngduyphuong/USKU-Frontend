<template>
  <div>
    <v-row justify="center">
      <!-- remove persistent to enable closing popup dialog by clicking outside the box -->
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            plain
            style="
              background-color: var(--backgroundColor);
              border-radius: 10px;
              text-transform: none;
              width: 100%;
              padding: 0 2rem;
            "
          >
            Create Account
          </v-btn>
        </template>
        <v-card style="background-color: var(--backgroundColor)">
          <v-card-title>
            <!-- <h4>Create New User</h4> -->
            <div id="popupTitle">Create New User</div>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Username*"
                    color="#54595f"
                    v-model="rUsername"
                    hint="Username will be used to login"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Email*"
                    v-model="email"
                    color="#54595f"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    label="Password*"
                    required
                    color="#54595f"
                    v-model="rPassword"
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    :append-icon="
                      showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'
                    "
                    :type="showConfirmPassword ? 'text' : 'password'"
                    label="Confirm Password*"
                    required
                    color="#54595f"
                    v-model="confPassword"
                    @click:append="showConfirmPassword = !showConfirmPassword"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="First Name*"
                    color="#54595f"
                    v-model="fname"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    color="#54595f"
                    label="Last Name*"
                    v-model="lname"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    color="#54595f"
                    label="Date of birth*"
                    v-model="birthDate"
                    hint="yyyy-mm-dd"
                  ></v-text-field>
                </v-col>
                <!-- TODO inputable date-box, unfinished -->
                <!-- <v-col cols="12">
                  <v-menu
                    ref="menu1"
                    v-model="menu1"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="dateFormatted"
                        label="Date"
                        hint="MM/DD/YYYY format"
                        persistent-hint
                        prepend-icon="mdi-calendar"
                        v-bind="attrs"
                        @blur="date = parseDate(dateFormatted)"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      no-title
                      @input="menu1 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col> -->
                <v-col cols="12">
                  <p>Marital Status:</p>
                  <v-radio-group v-model="maritalStatus" row>
                    <v-radio label="Single" value="S"></v-radio>
                    <v-radio label="Married" value="M"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12">
                  <p>Gender:</p>
                  <v-radio-group v-model="gender" row>
                    <v-radio label="Male" value="M"></v-radio>
                    <v-radio label="Female" value="F"></v-radio>
                    <v-radio label="I prefer not to say" value=""></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    color="#54595f"
                    label="Yearly Income"
                    v-model="yearlyIncome"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    color="#54595f"
                    label="Total Children"
                    v-model="totalChildren"
                    type="number"
                    min="0"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    color="#54595f"
                    label="Number Children At Home"
                    v-model="numberChildrenAtHome"
                    type="number"
                    min="0"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    color="#54595f"
                    label="Education"
                    v-model="education"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    color="#54595f"
                    label="Occupation"
                    v-model="occupation"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    color="#54595f"
                    label="House Owner Flag"
                    v-model="houseOwnerFlag"
                    type="number"
                    min="0"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    color="#54595f"
                    label="Number Cars Owned"
                    v-model="numberCarsOwned"
                    type="number"
                    min="0"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    color="#54595f"
                    label="Address Line 1"
                    v-model="addressLine1"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    color="#54595f"
                    label="Address Line 2"
                    v-model="addressLine2"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    color="#54595f"
                    label="Commute Distance"
                    v-model="commuteDistance"
                    hint="E.g. 1-2 Miles"
                  ></v-text-field>
                </v-col>
                <!-- <v-col cols="3">
                  <v-autocomplete
                    v-model="country"
                    :items="testItems"
                    label="Country"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="3">
                  <v-autocomplete
                    v-model="state"
                    :items="testItems"
                    label="State"
                    autocomplete="off"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="3">
                  <v-autocomplete
                    v-model="city"
                    :items="testItems"
                    label="City"
                    autocomplete="off"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="3">
                  <v-autocomplete
                    v-model="postcode"
                    :items="testItems"
                    label="Postcode"
                    autocomplete="off"
                  ></v-autocomplete>
                </v-col> -->
                <!-- ==================================== -->
                <v-col cols="3">
                  <!-- <v-text-field
                    v-model="country"
                    color="#54595f"
                    label="Country"
                  ></v-text-field> -->
                  <v-autocomplete
                    v-model="country"
                    :items="country_list"
                    label="Country"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="3">
                  <!-- <v-text-field
                    v-model="state"
                    color="#54595f"
                    label="State"
                    autocomplete="off"
                  ></v-text-field> -->
                  <v-autocomplete
                    v-model="state"
                    :items="state_list"
                    label="State"
                    autocomplete="off"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                    v-model="city"
                    color="#54595f"
                    label="City"
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                    v-model="postcode"
                    color="#54595f"
                    label="Postcode"
                  ></v-text-field>
                </v-col>
              </v-row>
              <small>*indicates required fields</small>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="dialog = false" style="color: orangered">
              Close
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn text @click="register" style="color: #f9a825">
              Register
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // ?  dialog control var
      dialog: false,

      // ?  toggle hide/show password control vars
      showPassword: false,
      showConfirmPassword: false,

      // *  register data
      fname: '',
      lname: '',
      email: '',
      rUsername: '',
      rPassword: '',
      confPassword: '',

      maritalStatus: '',
      gender: '',
      yearlyIncome: '',
      totalChildren: null,
      numberChildrenAtHome: null,
      education: '',
      occupation: '',
      houseOwnerFlag: null,
      numberCarsOwned: null,
      addressLine2: '',
      addressLine1: '',
      dateFirstPurchase: '',
      commuteDistance: '',
      birthDate: '',

      country: '',
      state: '',
      city: '',
      postcode: '',

      // *  empty array used to test vuetify auto-complete fields
      testItems: [],

      //hardcoded list of all countries and states in OZ
      country_list: [
        'Afghanistan',
        'Albania',
        'Algeria',
        'Andorra',
        'Angola',
        'Anguilla',
        'Antigua &amp; Barbuda',
        'Argentina',
        'Armenia',
        'Aruba',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bermuda',
        'Bhutan',
        'Bolivia',
        'Bosnia &amp; Herzegovina',
        'Botswana',
        'Brazil',
        'British Virgin Islands',
        'Brunei',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cambodia',
        'Cameroon',
        'Cape Verde',
        'Cayman Islands',
        'Chad',
        'Chile',
        'China',
        'Colombia',
        'Congo',
        'Cook Islands',
        'Costa Rica',
        'Cote D Ivoire',
        'Croatia',
        'Cruise Ship',
        'Cuba',
        'Cyprus',
        'Czech Republic',
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican Republic',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Equatorial Guinea',
        'Estonia',
        'Ethiopia',
        'Falkland Islands',
        'Faroe Islands',
        'Fiji',
        'Finland',
        'France',
        'French Polynesia',
        'French West Indies',
        'Gabon',
        'Gambia',
        'Georgia',
        'Germany',
        'Ghana',
        'Gibraltar',
        'Greece',
        'Greenland',
        'Grenada',
        'Guam',
        'Guatemala',
        'Guernsey',
        'Guinea',
        'Guinea Bissau',
        'Guyana',
        'Haiti',
        'Honduras',
        'Hong Kong',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran',
        'Iraq',
        'Ireland',
        'Isle of Man',
        'Israel',
        'Italy',
        'Jamaica',
        'Japan',
        'Jersey',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kuwait',
        'Kyrgyz Republic',
        'Laos',
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Macau',
        'Macedonia',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Mauritania',
        'Mauritius',
        'Mexico',
        'Moldova',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Montserrat',
        'Morocco',
        'Mozambique',
        'Namibia',
        'Nepal',
        'Netherlands',
        'Netherlands Antilles',
        'New Caledonia',
        'New Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'Norway',
        'Oman',
        'Pakistan',
        'Palestine',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Poland',
        'Portugal',
        'Puerto Rico',
        'Qatar',
        'Reunion',
        'Romania',
        'Russia',
        'Rwanda',
        'Saint Pierre &amp; Miquelon',
        'Samoa',
        'San Marino',
        'Satellite',
        'Saudi Arabia',
        'Senegal',
        'Serbia',
        'Seychelles',
        'Sierra Leone',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'South Africa',
        'South Korea',
        'Spain',
        'Sri Lanka',
        'St Kitts &amp; Nevis',
        'St Lucia',
        'St Vincent',
        'St. Lucia',
        'Sudan',
        'Suriname',
        'Swaziland',
        'Sweden',
        'Switzerland',
        'Syria',
        'Taiwan',
        'Tajikistan',
        'Tanzania',
        'Thailand',
        "Timor L'Este",
        'Togo',
        'Tonga',
        'Trinidad &amp; Tobago',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Turks &amp; Caicos',
        'Uganda',
        'Ukraine',
        'United Arab Emirates',
        'United Kingdom',
        'Uruguay',
        'Uzbekistan',
        'Venezuela',
        'Vietnam',
        'Virgin Islands (US)',
        'Yemen',
        'Zambia',
        'Zimbabwe'
      ],
      state_list: [
        'New South Wales',
        'Victoria',
        'Queensland',
        'Tasmania',
        'South Australia',
        'Western Australia',
        'Northern Territory',
        'Australian Capital Territory'
      ]
      // TODO  inputable date-box, unfinished
      // date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      //   .toISOString()
      //   .substr(0, 10),
      // // dateFormatted: '',
      // dateFormatted: this.formatDate(
      //   new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      //     .toISOString()
      //     .substr(0, 10)
      // ),
      // menu1: false
      // // ?  toggle hide/show datebox
      // showDateBox: false
    }
  },

  computed: {},

  // TODO  inputable date-box, unfinished
  // watch: {
  //   date() {
  //     this.dateFormatted = this.formatDate(this.date)
  //   }
  // },

  methods: {
    // *  check if a date field follows yyyy-mm-dd format
    validateDateFields(input) {
      let regex = /^[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
      return regex.test(input)
    },

    // !  validation rules are not designed, thus not implemented
    // *  the following function are mock-up rules for registering, will be updated & modularized later
    register() {
      if (
        this.rUsername &&
        this.rPassword &&
        this.confPassword &&
        this.email &&
        this.birthDate &&
        this.fname &&
        this.lname
      ) {
        if (this.rPassword !== this.confPassword) {
          alert('Confirm password does not match!')
        } else if (!this.validateDateFields(this.birthDate)) {
          alert('Please fill in date fields following YYYY-MM-DD format!')
        } else {
          // *  register with given info
          // TODO use object for payload passing (replace code in data())
          this.$store.dispatch('auth/register', {
            username: this.rUsername,
            password: this.rPassword,
            password2: this.confPassword,
            email: this.email,
            first_name: this.fname,
            last_name: this.lname,
            birthdate: this.birthDate,
            maritalstatus: this.maritalStatus,
            gender: this.gender,
            geographykey: null,
            yearlyincome: this.yearlyIncome,
            totalchildren: this.totalChildren,
            numberchildrenathome: this.numberChildrenAtHome,
            englisheducation: this.education,
            englishoccupation: this.occupation,
            houseownerflag: this.houseOwnerFlag,
            numbercarsowned: this.houseOwnerFlag,
            addressline1: this.addressLine1,
            addressline2: this.addressLine2,
            datefirstpurchase: null,
            commutedistance: this.commuteDistance
          })
        }
      } else {
        alert('Required fields cannot be empty!')
      }
    }

    // TODO  inputable date-box in mm/dd/yyy format, unfinished
    // formatDate(date) {
    //   if (!date) return null

    //   // eslint-disable-next-line array-element-newline
    //   const [year, month, day] = date.split('-')
    //   return `${month}/${day}/${year}`
    // },

    // parseDate(date) {
    //   if (!date) return null

    //   // eslint-disable-next-line array-element-newline
    //   const [month, day, year] = date.split('/')
    //   return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    // }
  }
}
</script>

<style lang="scss">
.v-text-field {
  margin: 0%;
  padding: 0%;
}

#popupTitle {
  text-align: center;
  /* padding-bottom: 100px; */
  margin: 8px auto 16px auto;
  font-size: 1.2em;
}

.v-text-field label {
  transform-origin: top left;
  font-size: 0.9em;
}
</style>
