namespace passwordGenerator
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.btnGenerate = new System.Windows.Forms.Button();
            this.txtPassword = new System.Windows.Forms.TextBox();
            this.nudLength = new System.Windows.Forms.NumericUpDown();
            this.label1 = new System.Windows.Forms.Label();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.chbNumbers = new System.Windows.Forms.CheckBox();
            this.chbSymbols = new System.Windows.Forms.CheckBox();
            this.chbUppercase = new System.Windows.Forms.CheckBox();
            this.chbLowercase = new System.Windows.Forms.CheckBox();
            ((System.ComponentModel.ISupportInitialize)(this.nudLength)).BeginInit();
            this.groupBox1.SuspendLayout();
            this.SuspendLayout();
            // 
            // btnGenerate
            // 
            this.btnGenerate.Location = new System.Drawing.Point(366, 11);
            this.btnGenerate.Name = "btnGenerate";
            this.btnGenerate.Size = new System.Drawing.Size(101, 31);
            this.btnGenerate.TabIndex = 0;
            this.btnGenerate.Text = "Generate";
            this.btnGenerate.UseVisualStyleBackColor = true;
            this.btnGenerate.Click += new System.EventHandler(this.btnGenerate_Click);
            // 
            // txtPassword
            // 
            this.txtPassword.Location = new System.Drawing.Point(13, 13);
            this.txtPassword.Name = "txtPassword";
            this.txtPassword.Size = new System.Drawing.Size(347, 26);
            this.txtPassword.TabIndex = 1;
            // 
            // nudLength
            // 
            this.nudLength.Location = new System.Drawing.Point(148, 20);
            this.nudLength.Name = "nudLength";
            this.nudLength.Size = new System.Drawing.Size(120, 26);
            this.nudLength.TabIndex = 2;
            this.nudLength.Value = new decimal(new int[] {
            8,
            0,
            0,
            0});
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(6, 22);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(136, 20);
            this.label1.TabIndex = 3;
            this.label1.Text = "Password Length:";
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.chbNumbers);
            this.groupBox1.Controls.Add(this.chbSymbols);
            this.groupBox1.Controls.Add(this.chbUppercase);
            this.groupBox1.Controls.Add(this.chbLowercase);
            this.groupBox1.Controls.Add(this.nudLength);
            this.groupBox1.Controls.Add(this.label1);
            this.groupBox1.Location = new System.Drawing.Point(13, 48);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(454, 91);
            this.groupBox1.TabIndex = 4;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Settings";
            // 
            // chbNumbers
            // 
            this.chbNumbers.AutoSize = true;
            this.chbNumbers.Checked = true;
            this.chbNumbers.CheckState = System.Windows.Forms.CheckState.Checked;
            this.chbNumbers.Location = new System.Drawing.Point(348, 61);
            this.chbNumbers.Name = "chbNumbers";
            this.chbNumbers.Size = new System.Drawing.Size(99, 24);
            this.chbNumbers.TabIndex = 7;
            this.chbNumbers.Text = "Numbers";
            this.chbNumbers.UseVisualStyleBackColor = true;
            // 
            // chbSymbols
            // 
            this.chbSymbols.AutoSize = true;
            this.chbSymbols.Checked = true;
            this.chbSymbols.CheckState = System.Windows.Forms.CheckState.Checked;
            this.chbSymbols.Location = new System.Drawing.Point(247, 61);
            this.chbSymbols.Name = "chbSymbols";
            this.chbSymbols.Size = new System.Drawing.Size(95, 24);
            this.chbSymbols.TabIndex = 6;
            this.chbSymbols.Text = "Symbols";
            this.chbSymbols.UseVisualStyleBackColor = true;
            // 
            // chbUppercase
            // 
            this.chbUppercase.AutoSize = true;
            this.chbUppercase.Checked = true;
            this.chbUppercase.CheckState = System.Windows.Forms.CheckState.Checked;
            this.chbUppercase.Location = new System.Drawing.Point(128, 61);
            this.chbUppercase.Name = "chbUppercase";
            this.chbUppercase.Size = new System.Drawing.Size(113, 24);
            this.chbUppercase.TabIndex = 5;
            this.chbUppercase.Text = "Uppercase";
            this.chbUppercase.UseVisualStyleBackColor = true;
            // 
            // chbLowercase
            // 
            this.chbLowercase.AutoSize = true;
            this.chbLowercase.Checked = true;
            this.chbLowercase.CheckState = System.Windows.Forms.CheckState.Checked;
            this.chbLowercase.Location = new System.Drawing.Point(10, 61);
            this.chbLowercase.Name = "chbLowercase";
            this.chbLowercase.Size = new System.Drawing.Size(112, 24);
            this.chbLowercase.TabIndex = 4;
            this.chbLowercase.Text = "Lowercase";
            this.chbLowercase.UseVisualStyleBackColor = true;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(479, 151);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.txtPassword);
            this.Controls.Add(this.btnGenerate);
            this.Name = "Form1";
            this.Text = "Password Generator";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.nudLength)).EndInit();
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btnGenerate;
        private System.Windows.Forms.TextBox txtPassword;
        private System.Windows.Forms.NumericUpDown nudLength;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.CheckBox chbNumbers;
        private System.Windows.Forms.CheckBox chbSymbols;
        private System.Windows.Forms.CheckBox chbUppercase;
        private System.Windows.Forms.CheckBox chbLowercase;
    }
}

