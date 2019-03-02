package com.songs.db;

import java.sql.*;

public class Driver {

    public static void main(String[] args) {
        try {
            Connection myConn = DriverManager.getConnection("jdbc:mysql://localhost:3306/songs?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=Asia/Jerusalem", "judym", "judym098765");
            Statement myStmt = myConn.createStatement();

            ResultSet myRs = myStmt.executeQuery("select * from songs");

            while (myRs.next()) {
                System.out.printf(myRs.getInt("ID") + " " +
                        myRs.getString("author") + " " +
                        myRs.getString("words") + " " +
                        myRs.getString("upload_time"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
