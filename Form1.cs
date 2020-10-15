using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace passwordGenerator
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private string password(int Length, bool LowerCase, bool UpperCase, bool Symbols, bool Numbers)
        {
            string passwd = "";
            char[] upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".ToCharArray();
            char[] lowerCaseArray = "abcdefghijklmnopqrstuvwxyz".ToCharArray();
            char[] numberArray = "0123456789".ToCharArray();
            char[] symbolArray = "`~!@#$%^&*()-_=+[{}]|<,.>/?".ToCharArray();
            char[] fullArray;


            var combinedList = new List<char>();
            

            if (LowerCase == true)
            {
                combinedList.AddRange(lowerCaseArray);
            }
            if (UpperCase == true)
            {
                combinedList.AddRange(upperCaseArray);
            }
            if (Symbols == true)
            {
                combinedList.AddRange(symbolArray);
            }
            if (Numbers == true)
            {
                combinedList.AddRange(numberArray);
            }


            for (int i = 0; i < Length; i++) 
            {
            Random rnd = new Random();
                
                
            int randomChar = rnd.Next(combinedList.Count);
            passwd += combinedList[randomChar]; 
            System.Threading.Thread.Sleep(25);
            }

            return passwd;
        }

        private void btnGenerate_Click(object sender, EventArgs e)
        {
            txtPassword.Text = password(
                Convert.ToInt32(nudLength.Value), 
                chbLowercase.Checked, 
                chbUppercase.Checked, 
                chbSymbols.Checked,
                chbNumbers.Checked
             );
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            txtPassword.Text = password(
                Convert.ToInt32(nudLength.Value),
                chbLowercase.Checked,
                chbUppercase.Checked,
                chbSymbols.Checked,
                chbNumbers.Checked
             );
        }
    }
}
