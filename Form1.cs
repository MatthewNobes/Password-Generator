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

        private string password(int Length)
        {
            string passwd = "";

            for (int i = 0; i < Length; i++) 
            {
                Random rnd = new Random();
                char randomChar = (char)rnd.Next('!', '~');
                passwd += randomChar; 
                System.Threading.Thread.Sleep(25);
            }

            return passwd;
        }

        private void btnGenerate_Click(object sender, EventArgs e)
        {
            
            txtPassword.Text = password(Convert.ToInt32(nudLength.Value));
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            txtPassword.Text = password(Convert.ToInt32(nudLength.Value));
        }
    }
}
