USE [master]
GO
/****** Object:  Database [whats_db]    Script Date: 10/14/2024 11:41:42 AM ******/
CREATE DATABASE [whats_db]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'whats_db', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\whats_db.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'whats_db_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\whats_db_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [whats_db] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [whats_db].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [whats_db] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [whats_db] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [whats_db] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [whats_db] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [whats_db] SET ARITHABORT OFF 
GO
ALTER DATABASE [whats_db] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [whats_db] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [whats_db] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [whats_db] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [whats_db] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [whats_db] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [whats_db] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [whats_db] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [whats_db] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [whats_db] SET  DISABLE_BROKER 
GO
ALTER DATABASE [whats_db] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [whats_db] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [whats_db] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [whats_db] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [whats_db] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [whats_db] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [whats_db] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [whats_db] SET RECOVERY FULL 
GO
ALTER DATABASE [whats_db] SET  MULTI_USER 
GO
ALTER DATABASE [whats_db] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [whats_db] SET DB_CHAINING OFF 
GO
ALTER DATABASE [whats_db] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [whats_db] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [whats_db] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [whats_db] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'whats_db', N'ON'
GO
ALTER DATABASE [whats_db] SET QUERY_STORE = ON
GO
ALTER DATABASE [whats_db] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [whats_db]
GO
/****** Object:  User [bnanwhats]    Script Date: 10/14/2024 11:41:42 AM ******/
CREATE USER [bnanwhats] FOR LOGIN [bnanwhats] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[setup_installation]    Script Date: 10/14/2024 11:41:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[setup_installation](
	[company_id] [varchar](4) NOT NULL,
	[company_name] [nvarchar](50) NULL,
	[company_status] [char](1) NULL,
PRIMARY KEY CLUSTERED 
(
	[company_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
)
GO
/****** Object:  Table [dbo].[source]    Script Date: 10/14/2024 11:41:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[source](
	[source_id] [varchar](4) NOT NULL,
	[source_name] [nvarchar](50) NULL,
	[source_mobile] [varchar](20) NULL,
	[source_deviceType] [nvarchar](20) NULL,
	[source_isBussenis] [nvarchar](20) NULL,
	[source_Login_Datetime] [datetime] NULL,
	[source_LogOut_Datetime] [datetime] NULL,
	[source_status] [char](1) NULL
)
GO
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4001', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4002', N'Mazen Essam Elmohamady', N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4003', N'Mazen Essam Elmohamady', N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4004', N'Mazen Essam Elmohamady', N'A')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4005', N'Mazen Essam Elmohamady', N'A')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4006', N'maze', N'A')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4007', N'Mazen Essam Elmohamady', N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4008', N'Mazen Essam Elmohamady', N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4009', N'Mazen Essam Elmohamady', N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4010', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4011', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4012', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4013', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4014', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4015', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4016', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4017', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4018', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4019', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4020', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4021', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4022', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4023', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4024', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4025', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4026', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4027', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4028', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4029', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4030', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4031', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4032', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4033', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4034', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4035', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4036', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4037', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4038', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4039', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4040', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4041', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4042', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4043', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4044', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4045', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4046', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4047', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4048', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4049', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4050', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'4060', NULL, N'N')
INSERT [dbo].[setup_installation] ([company_id], [company_name], [company_status]) VALUES (N'5000', NULL, N'N')
GO
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4001', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4002', N'Mazen Essam Elmohamady', N'201112847004', N'android', N'undefined', CAST(N'2024-10-10T11:24:09.000' AS DateTime), CAST(N'2024-10-10T11:24:11.000' AS DateTime), N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4003', N'Mazen Essam Elmohamady', N'201112847004', N'android', N'undefined', CAST(N'2024-10-10T11:00:22.000' AS DateTime), CAST(N'2024-10-10T11:00:23.000' AS DateTime), N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4004', N'Mazen Essam Elmohamady', N'201112847004', N'android', N'undefined', CAST(N'2024-10-10T11:36:23.000' AS DateTime), CAST(N'2024-10-10T11:05:22.000' AS DateTime), N'A')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4005', N'Mazen Essam Elmohamady', N'201112847004', N'android', N'undefined', CAST(N'2024-10-10T11:49:41.000' AS DateTime), CAST(N'2024-10-10T11:44:12.000' AS DateTime), N'A')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4006', N'maze', N'201104', NULL, NULL, NULL, NULL, N'A')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4007', N'Mazen Essam Elmohamady', N'201112847004', N'android', N'undefined', CAST(N'2024-10-10T11:55:02.000' AS DateTime), CAST(N'2024-10-10T11:55:03.000' AS DateTime), N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4008', N'Mazen Essam Elmohamady', N'201112847004', N'android', N'undefined', CAST(N'2024-10-10T12:02:53.000' AS DateTime), CAST(N'2024-10-10T09:24:30.000' AS DateTime), N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4009', N'Mazen Essam Elmohamady', N'201112847004', N'android', N'undefined', CAST(N'2024-10-10T14:24:48.000' AS DateTime), CAST(N'2024-10-10T14:24:49.000' AS DateTime), N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4010', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4011', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4012', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4013', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4014', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4015', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4016', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4017', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4018', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4019', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4020', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4021', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4022', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4023', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4024', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4025', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4026', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4027', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4028', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4029', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4030', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4031', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4032', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4033', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4034', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4035', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4036', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4037', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4038', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4039', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4040', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4041', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4042', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4043', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4044', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4045', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4046', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4047', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4048', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4049', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4050', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4060', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'5000', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
INSERT [dbo].[source] ([source_id], [source_name], [source_mobile], [source_deviceType], [source_isBussenis], [source_Login_Datetime], [source_LogOut_Datetime], [source_status]) VALUES (N'4002', NULL, NULL, NULL, NULL, NULL, NULL, N'N')
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [index_name]    Script Date: 10/14/2024 11:41:42 AM ******/
CREATE NONCLUSTERED INDEX [index_name] ON [dbo].[source]
(
	[source_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[setup_installation] ADD  DEFAULT (NULL) FOR [company_name]
GO
ALTER TABLE [dbo].[setup_installation] ADD  DEFAULT ('N') FOR [company_status]
GO
ALTER TABLE [dbo].[source] ADD  DEFAULT (NULL) FOR [source_name]
GO
ALTER TABLE [dbo].[source] ADD  DEFAULT (NULL) FOR [source_mobile]
GO
ALTER TABLE [dbo].[source] ADD  DEFAULT (NULL) FOR [source_deviceType]
GO
ALTER TABLE [dbo].[source] ADD  DEFAULT (NULL) FOR [source_isBussenis]
GO
ALTER TABLE [dbo].[source] ADD  DEFAULT (NULL) FOR [source_Login_Datetime]
GO
ALTER TABLE [dbo].[source] ADD  DEFAULT (NULL) FOR [source_LogOut_Datetime]
GO
ALTER TABLE [dbo].[source] ADD  DEFAULT ('N') FOR [source_status]
GO
ALTER TABLE [dbo].[source]  WITH CHECK ADD FOREIGN KEY([source_id])
REFERENCES [dbo].[setup_installation] ([company_id])
ON DELETE CASCADE
GO
USE [master]
GO
ALTER DATABASE [whats_db] SET  READ_WRITE 
GO



USE [whats_db]
GO
/****** Object:  Table [dbo].[Benefactor]    Script Date: 10/14/2024 11:39:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Benefactor](
	[Benefactor_Id] [varchar](15) NOT NULL,
	[Benefactor_Person_EnName] [nvarchar](50) NULL,
	[Benefactor_Person_ArName] [nvarchar](50) NULL,
	[Benefactor_country_Key] [varchar](5) NULL,
	[Benefactor_PhoneNumber] [varchar](20) NULL,
	[Benefactor_Status] [char](1) NULL,
 CONSTRAINT [PK_Benefactor] PRIMARY KEY CLUSTERED 
(
	[Benefactor_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[https_log]    Script Date: 10/14/2024 11:39:46 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[https_log](
	[row_no] [int] IDENTITY(1,1) NOT NULL,
	[enterdate] [datetime] NOT NULL,
	[ipaddress] [varchar](150) NULL,
	[parm_text] [text] NULL,
	[body_text] [ntext] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Message]    Script Date: 10/14/2024 11:39:46 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Message](
	[Message_Id] [varchar](50) NOT NULL,
	[Message_Source_Id] [char](4) NULL,
	[Message_Benefactor_Id] [nvarchar](20) NULL,
	[Message_Sent_DateTime] [datetime] NULL,
	[Message_Received_DateTime] [datetime] NULL,
	[Message_Read_DateTime] [datetime] NULL,
	[Message_Deleted_DateTime] [datetime] NULL,
	[Message_Type] [varchar](2) NULL,
	[Message_PhoneNumberFull] [varchar](20) NULL,
	[Message_Text] [nvarchar](500) NULL,
	[Message_Status] [char](1) NULL,
 CONSTRAINT [PK_Message] PRIMARY KEY CLUSTERED 
(
	[Message_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

GO
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'800317011929306', N'Wafa Rashid Hamad Al-Badawi', N'مازن', N'20', N'1112847004', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'800341053576735', N'Manal Abdul Rahman Abdul Majeed Al-Fawzan', N'عمر', N'20', N'1126807002', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'800483257962807', N'Nora Abdul-Wadud Fahhad Al-Madiheesh', N'نورة عبدالودود فهاد المديهيش', N'5', N'43563', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'800501331850942', N'Manal Abdel Halim Salem Al-Hazaa', N'منال عبدالحليم سالم الهزاع', N'20', N'1019443816', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'800514471070062', N'The longings of Riad Omar al-Turki', N'غيوم الودق', N'966', N'530648535', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'800520862673537', N'Here is Saad Ahmed Al-Rashoudi', N'المهندس حسين', N'967', N'777331777', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'800851244455042', N'Rana Ahmed Abdul Ghafoor Al-Shahrani', N'عصام المحمدي', N'20', N'1229563356', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'800910149542734', N'Here Abdul Majeed Ibrahim Al-Salhi', N'هنا عبدالمجيد إبراهيم الصالحي', N'966', N'543000522', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'800926052398092', N'Sarah Mansour Faisal Al-Thunayan', N'سارة منصور فيصل الثنيان', N'20', N'1127237646', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'801278224164555', N'Mona Walid Youssef Al-Arfaj', N'منى وليد يوسف العرفج', N'966', N'544015046', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'801367916612550', N'Zainab Abdul Tawab Issa Al-Nuwaisri', N'زينب عبدالتواب عيسى النويصري', N'20', N'1141040999', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'801374718094436', N'Maha Jassim Moaz Al-Hamdan', N'مها جاسم معاذ الحمدان', N'966', N'508135458', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'801661003885476', N'Rowan Tariq Hamad Al-Fraih', N'روان طارق حمد الفريح', N'20', N'1141040999', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'801669819246670', N'Hanan Walid Saleh Al-Hadyan', N'حنان وليد صالح الهديان', N'20', N'1110225668', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'802116771529418', N'Khawla Abdulwahid Abdul-Ghani Al-Junaidi', N'خولة عبدالواحد عبدالغني الجنيدي', N'20', N'1141040999', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'802259496758282', N'Hadeel Tariq Abdul Ilah Al-Subaie', N'هديل طارق عبدالاله السبيعي', N'966', N'544015046', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'802263060159685', N'Rana Nayef Miteb Al-Suhaibani', N'رنا نايف متعب السحيباني', N'966', N'543000522', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'802400266693364', N'Amal Amer Hussam Al-Adwani', N'امل عامر حسام العدواني', N'966', N'503195915', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'802427005677667', N'Nadia Abdel Wahab Ahmed Al-Arfaj', N'نادية عبدالوهاب أحمد العرفج', N'20', N'1110225668', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'802751139421962', N'Samar Abdul Mohsen Abdul Majeed Al Khalaf', N'سمر عبدالمحسن عبدالمجيد الخلف', N'20', N'1112847004', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'802782093063439', N'Mounira Abdul Qadir Abdul-Wadud Al-Mutlaq', N'منيرة عبدالقادر عبدالودود المطلق', N'20', N'1127237646', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'802885295214707', N'Muzna Abdul Khaleq Abdul Wahed Al-Matrafi', N'مزنة عبدالخالق عبدالواحد المطرفي', N'20', N'1090504001', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'802991767578719', N'Aseel Miteb Anas Al-Hamdan', N'اسيل متعب انس الحمدان', N'966', N'508135458', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900248016527353', N'Naglaa Abdel Hay Abdul Tawab Islam', N'نجلاء عبدالحي عبدالتواب اسلام', N'966', N'544015046', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900248803220181', N'Suad Sufyan Sorour Abdel-Wadd', N'سعاد سفيان سرور عبدالودود', N'20', N'1141040999', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900268808552557', N'Ayman Tawfiq Haitham Islam', N'ايمن توفيق هيثم اسلام', N'966', N'544015046', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900268946224103', N'Yaqoub Magdy Abdel Ghafour Mahmoud', N'يعقوب مجدي عبدالغفور محمود', N'20', N'1141040999', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900279378349347', N'Hind Mowafak Ayham Abdel Rahim', N'هند موفق ايهم عبدالرحيم', N'20', N'1110225668', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900322241726312', N'Arwa Taha Nabil Fares', N'اروى طه نبيل فارس', N'20', N'1112847004', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900365157152511', N'Musab Omar Rashad Wael', N'مصعب عمر رشاد وائل', N'20', N'1127237646', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900392217813102', N'Mowafak Salah Hussein Moataz', N'موفق صلاح حسين معتز', N'20', N'1090504001', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900449845383239', N'Ayman Abdel Rahman Sorour Ibrahim', N'ايمن عبدالرحمن سرور إبراهيم', N'966', N'503195915', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900452281252269', N'Hoda Hani Yaqoub Taher', N'هدى هاني يعقوب طاهر', N'966', N'508135458', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900475838494272', N'Hanan Abdel Wahab Shaban Mustafa', N'حنان عبدالوهاب شعبان مصطفى', N'20', N'1141040999', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900506092295777', N'Ali Taher Moataz Sadiq', N'علي طاهر معتز صادق', N'966', N'503195915', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900534768748694', N'Sufian Ahmed Abdel-Hay Rushdie', N'سفيان أحمد عبدالحي رشدي', N'966', N'543000522', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900563521232829', N'Salah Khalil Ayham Hani', N'صلاح خليل ايهم هاني', N'966', N'543000522', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900591229449859', N'Ashwaq Omair Omar Moataz', N'اشواق عمير عمر معتز', N'20', N'1090504001', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900607689661470', N'Hind Omar Abdel Halim Abdel Tawab', N'هند عمر عبدالحليم عبدالتواب', N'966', N'503195915', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900627778357838', N'Amal Abdul Jabbar Mustafa Kemal', N'امل عبدالجبار مصطفى كمال', N'966', N'503195915', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900632764450938', N'Hoor Abdel-Wadoud Shaaban Moataz', N'حور عبدالودود شعبان معتز', N'966', N'503195915', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900637029017829', N'Hadeel Nader Omar Hassan', N'هديل نادر عمر حسن', N'966', N'544015046', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900677653019300', N'Emad Othman Abdel-Hay Fahmy', N'عماد عثمان عبدالحي فهمي', N'20', N'1141040999', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900685764371676', N'Samar Musab Maher Firas', N'سمر مصعب ماهر فراس', N'20', N'1127237646', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900689109023296', N'Mahdi Abdel Rahim Abdel Tawab Osama', N'مهدي عبدالرحيم عبدالتواب أسامة', N'966', N'503195915', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900734064628786', N'Manal Hani Ahmed Mahdi', N'منال هاني أحمد مهدي', N'20', N'1090504001', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900753076615407', N'Morsi Issa Fattji Fares', N'مرسي عيسى فتجي فارس', N'966', N'508135458', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900753977520996', N'Emad Mabrouk Taha Marawan', N'عماد مبروك طه مروان', N'966', N'508135458', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900754974839462', N'Abdul-Ghani Munther Nader Fattji', N'عبدالغني منذر نادر فتجي', N'20', N'1127237646', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900775470037434', N'Muzna Wajdi Sadiq Munther', N'مزنة وجدي صادق منذر', N'966', N'508135458', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900777527120851', N'Sherif Nader Maher Rajab', N'شريف نادر ماهر رجب', N'20', N'1112847004', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900782735063461', N'Munther Yaqoub Faris Sadiq', N'منذر يعقوب فارس صادق', N'966', N'543000522', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900790294255986', N'Tawfiq Amir Yaqoub Taher', N'توفيق عمير يعقوب طاهر', N'966', N'503195915', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900796939846150', N'Abdul Jabbar Yasser Salah Abdel Tawab', N'عبدالجبار ياسر صلاح عبدالتواب', N'20', N'1141040999', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900825679429075', N'Hadeel Hassan Faris Sorour', N'هديل حسان فارس سرور', N'20', N'1141040999', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900869721186756', N'Abdul Ghafoor Ragab Hani Abdul Ghani', N'عبدالغفور رجب هاني عبدالغني', N'20', N'1110225668', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900880933426028', N'Here is Samir Mabrouk, Ayham', N'هنا سمير مبروك ايهم', N'966', N'503195915', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900930626266636', N'Hadeel Tawfiq Shaker Mahmoud', N'هديل توفيق شاكر محمود', N'966', N'508135458', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900930667914007', N'Azzam Sherif Ahmed Samir', N'عزام شريف أحمد سمير', N'20', N'1112847004', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900935873458668', N'Hajar Osama Emad Samir', N'هاجر أسامة عماد سمير', N'20', N'1112847004', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'900997219061067', N'Khawla Fattji Abdel Moneim Issa', N'خولة فتجي عبدالمنعم عيسى', N'966', N'508135458', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901001847636631', N'Ashraf Kamal Hassan Hussein', N'اشرف كمال حسان حسين', N'20', N'1141040999', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901034798887169', N'Nora Ali Islam Abdel Hay', N'نورة علي اسلام عبدالحي', N'966', N'544015046', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901103165722959', N'Moataz Abdel Wahab Ashraf Mustafa', N'معتز عبدالوهاب اشرف مصطفى', N'20', N'1112847004', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901116785780682', N'Abdel Moneim Musa Ibrahim Emad', N'عبدالمنعم موسى إبراهيم عماد', N'966', N'543000522', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901120507861531', N'Hind Islam Anas Abdel Tawab', N'هند اسلام انس عبدالتواب', N'20', N'1112847004', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901126069229513', N'Abdel Moneim Emad Fahmy Hani', N'عبدالمنعم عماد فهمي هاني', N'966', N'544015046', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901134344666180', N'Atheer Abdul Qadir Reda Abdel Qader', N'اثير عبدالقادر رضا عبدالقادر', N'20', N'1141040999', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901142720986532', N'Rashad Yahya Ayoub Omar', N'رشاد يحي أيوب عمر', N'20', N'1090504001', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901162965714962', N'Naglaa Mabrouk Abdul Qawi Abdel Wahab', N'نجلاء مبروك عبدالقوي عبدالوهاب', N'966', N'543000522', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901165090450477', N'Laila Abdel Khaleq Mustafa Hamdi', N'ليلى عبدالخالق مصطفى حمدي', N'20', N'1110225668', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901211634526007', N'Shorouk Wajdi Khalil Hussein', N'شروق وجدي خليل حسين', N'20', N'1110225668', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901236520440242', N'Musab Issa Shaker Omair', N'مصعب عيسى شاكر عمير', N'966', N'544015046', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901253732615815', N'Iman Abdel Halim Nabil Iyad', N'ايمان عبدالحليم نبيل اياد', N'20', N'1112847004', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901255495177932', N'Samir Abdel Tawab Naim Abdel Hay', N'سمير عبدالتواب نعيم عبدالحي', N'20', N'1141040999', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901263395889697', N'Here Abdel Moneim Naeem Haitham', N'هنا عبدالمنعم نعيم هيثم', N'20', N'1127237646', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901310829769811', N'Mona Wagdy Abdel-Wadoud Iyad', N'منى وجدي عبدالودود اياد', N'966', N'543000522', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901315450425423', N'Hussam Abdel Qader Moaz Hassan', N'حسام عبدالقادر معاذ حسان', N'966', N'544015046', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901318344651908', N'Here is Ahmed Yahya Omar', N'هنا أحمد يحي عمر', N'20', N'1110225668', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901333464069844', N'Mashael Khalil Magdy Taher', N'مشاعل خليل مجدي طاهر', N'966', N'503195915', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901350353045359', N'Mahmoud Maher Hani Ayman', N'محمود ماهر هاني ايمن', N'20', N'1112847004', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901380481952492', N'Hassan Hani Nabeel Rajab', N'حسن هاني نبيل رجب', N'20', N'1110225668', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901386549873432', N'Ruqaya Azzam Abdul Qawi Hassan', N'رقية عزام عبدالقوي حسان', N'20', N'1112847004', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901418966381216', N'Haitham Abdel Halim Morsi Osama', N'هيثم عبدالحليم مرسي أسامة', N'966', N'508135458', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901560396263287', N'Emad Wagdy Majdi Abdel Halim', N'عماد وجدي مجدي عبدالحليم', N'966', N'508135458', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901578884755614', N'Ayoub Munther Samir Hamdy', N'أيوب منذر سمير حمدي', N'20', N'1110225668', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901599474872529', N'Hor Omar Taher Samir', N'حور عمر طاهر سمير', N'20', N'1127237646', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901605423492746', N'Rana Ammar Ali Marawan', N'رنا عمار علي مروان', N'20', N'1110225668', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901627790150188', N'Rajab Ayham Mahdi Amir', N'رجب ايهم مهدي عمير', N'20', N'1127237646', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901671989765997', N'Faji Shaker Rashad Ayoub', N'فتجي شاكر رشاد أيوب', N'20', N'1127237646', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901679737838673', N'Hajar Samir Ismail Abdel Qawi', N'هاجر سمير إسماعيل عبدالقوي', N'20', N'1112847004', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901688439847498', N'Mona Fahmy Haitham', N'منى فهمي هيثم ايهم', N'20', N'1141040999', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901693434739774', N'Fetji Nader Jaber Anas', N'فتجي نادر جابر انس', N'20', N'1090504001', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901707648821544', N'I hope Ayham Hassan Moataz', N'امل ايهم حسان معتز', N'20', N'1090504001', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901731051880060', N'Hor Omair Yasser Moaz', N'حور عمير ياسر معاذ', N'966', N'543000522', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901761571949334', N'Samar Abdul Jabbar Mahdi Taher', N'سمر عبدالجبار مهدي طاهر', N'20', N'1110225668', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901788082926578', N'Rami Hassan Amir Ragab', N'رامي حسان عمير رجب', N'966', N'503195915', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901799691060717', N'Maryam Azzam Fahmy Abdel Rahman', N'مريم عزام فهمي عبدالرحمن', N'966', N'503195915', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901821674858995', N'Khadija Abdel Moneim Congratulations Haitham', N'خديجة عبدالمنعم مبروك هيثم', N'20', N'1127237646', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901822920838987', N'Sarah Mahdi Rushdi Abdul-Ghani', N'سارة مهدي رشدي عبدالغني', N'20', N'1090504001', N'A')
GO
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901835497414579', N'Mowaffaq Awad Hamid Sufyan', N'موفق عوض حامد سفيان', N'966', N'508135458', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901849642821103', N'Iman Islam Samir Fatji', N'ايمان اسلام سمير فتجي', N'966', N'543000522', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901879958332747', N'Al-Jawhara Hani Abdel-Qawi Iyad', N'الجوهرة هاني عبدالقوي اياد', N'20', N'1127237646', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901896108368367', N'Hassan Sharif Salah Faris', N'حسان شريف صلاح فارس', N'20', N'1141040999', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901905528231795', N'Raqia Ayham Ayman Munther', N'رقية ايهم ايمن منذر', N'20', N'1127237646', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901948389643281', N'Hussein Omar Tawfiq Tawfiq', N'حسين عمر توفيق توفيق', N'20', N'1090504001', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'901974979888753', N'Khawla Shaker Ayham Khalil', N'خولة شاكر ايهم خليل', N'966', N'544015046', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902108892664356', N'Ismail Awad Wael Naim', N'إسماعيل عوض وائل نعيم', N'20', N'1110225668', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902133089346809', N'Fatima Ammar Naim Nader', N'فاطمة عمار نعيم نادر', N'966', N'543000522', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902133378560462', N'Reem Firas Shaban Osama', N'ريم فراس شعبان أسامة', N'20', N'1127237646', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902145090969228', N'Zainab Hassan Ghazi Fattji', N'زينب حسان غازي فتجي', N'20', N'1112847004', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902219865494068', N'Morsi Abdul Rahman Kamal Ayham', N'مرسي عبدالرحمن كمال ايهم', N'966', N'508135458', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902232736833427', N'Moaz Abdul Rahim Taher Taha', N'معاذ عبدالرحيم طاهر طه', N'966', N'544015046', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902300132069112', N'Hadeel Ibrahim Abdul Rahman Ammar', N'هديل إبراهيم عبدالرحمن عمار', N'20', N'1141040999', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902304740362680', N'Abdul Halim Moataz Emad Abdul Jabbar', N'عبدالحليم معتز عماد عبدالجبار', N'20', N'1110225668', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902315805568767', N'Ragab Abdel Wahab Maher Ibrahim', N'رجب عبدالوهاب ماهر إبراهيم', N'966', N'543000522', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902358239160655', N'Azzam Mustafa Shaaban Taha', N'عزام مصطفى شعبان طه', N'20', N'1112847004', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902393573336921', N'Yasser Islam Moaz Iyad', N'ياسر اسلام معاذ اياد', N'20', N'1090504001', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902404222776194', N'Yaqoub Sharif Hussein Yaqoub', N'يعقوب شريف حسين يعقوب', N'966', N'543000522', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902427749860633', N'Badria Wael Naim Fahmy', N'بدرية وائل نعيم فهمي', N'20', N'1110225668', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902433862875204', N'Rana Samir Hamdy Abdel Moneim', N'رنا سمير حمدي عبدالمنعم', N'20', N'1090504001', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902434405440434', N'Abdel Moneim Mowafak Maher Hassan', N'عبدالمنعم موفق ماهر حسن', N'20', N'1127237646', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902513914040619', N'Hind Ammar Wajdi Bilal', N'هند عمار وجدي بلال', N'966', N'503195915', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902541336562204', N'Fattji Taher Maher Ismail', N'فتجي طاهر ماهر إسماعيل', N'966', N'544015046', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902587114214593', N'Wafa Fattji Congratulations Ammar', N'وفاء فتجي مبروك عمار', N'966', N'508135458', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902597283338910', N'Manal Ammar Ali Rashad', N'منال عمار علي رشاد', N'20', N'1141040999', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902613697587157', N'Muzna Abdul Tawab Abdul Qader Azzam', N'مزنة عبدالتواب عبدالقادر عزام', N'966', N'508135458', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902672208940582', N'Nadia Ayoub Sufyan Jaber', N'نادية أيوب سفيان جابر', N'966', N'544015046', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902699935713594', N'Abdel Moneim Iyad Emad Osama', N'عبدالمنعم اياد عماد أسامة', N'966', N'503195915', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902705211985091', N'Samar Shaban Hassan Magdy', N'سمر شعبان حسان مجدي', N'20', N'1090504001', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902716159674696', N'Yasser Ayman Majdy Mustafa', N'ياسر ايمن مجدي مصطفى', N'20', N'1110225668', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902754138656848', N'Muzna Wael Wagdy Abdulwad', N'مزنة وائل وجدي عبدالودود', N'966', N'543000522', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902783476948162', N'Wajdi Bilal Ibrahim Othman', N'وجدي بلال إبراهيم عثمان', N'20', N'1112847004', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902818869579730', N'Here Yaqoub Sharif Abdel Tawab', N'هنا يعقوب شريف عبدالتواب', N'20', N'1090504001', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902820062221865', N'Reem Abdel Halim Abdel Moneim Magdy', N'ريم عبدالحليم عبدالمنعم مجدي', N'20', N'1090504001', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902880569495136', N'Fawzi Anas Wajdi Azzam', N'فوزي انس وجدي عزام', N'20', N'1127237646', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902933636736957', N'Munira Abdul Khaleq Marawan Wagdy', N'منيرة عبدالخالق مروان وجدي', N'966', N'544015046', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902936544647634', N'Mustafa Hossam Fawzy Salah', N'مصطفى حسام فوزي صلاح', N'20', N'1112847004', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902948165740446', N'Hoda Moaz Ali Hamdy', N'هدى معاذ علي حمدي', N'966', N'543000522', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902962015173251', N'Badria Haitham Shaker Abdel Hay', N'بدرية هيثم شاكر عبدالحي', N'966', N'544015046', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902970707081731', N'Aisha Haitham Abdel Wahab Hani', N'عائشة هيثم عبدالوهاب هاني', N'966', N'508135458', N'A')
INSERT [dbo].[Benefactor] ([Benefactor_Id], [Benefactor_Person_EnName], [Benefactor_Person_ArName], [Benefactor_country_Key], [Benefactor_PhoneNumber], [Benefactor_Status]) VALUES (N'902989350094721', N'Sumaya Wagdy Shaaban Osama', N'سمية وجدي شعبان أسامة', N'20', N'1127237646', N'A')
GO
INSERT [dbo].[Message] ([Message_Id], [Message_Source_Id], [Message_Benefactor_Id], [Message_Sent_DateTime], [Message_Received_DateTime], [Message_Read_DateTime], [Message_Deleted_DateTime], [Message_Type], [Message_PhoneNumberFull], [Message_Text], [Message_Status]) VALUES (N'3EB0229D17FDE99B32F6A9', N'4001', N'800317011929306', CAST(N'2024-09-19T15:26:00.550' AS DateTime), NULL, NULL, NULL, N'T', N'201112847004', N'hello gfgff', N'A')
INSERT [dbo].[Message] ([Message_Id], [Message_Source_Id], [Message_Benefactor_Id], [Message_Sent_DateTime], [Message_Received_DateTime], [Message_Read_DateTime], [Message_Deleted_DateTime], [Message_Type], [Message_PhoneNumberFull], [Message_Text], [Message_Status]) VALUES (N'3EB043BF8A43E649FB41A1', N'4001', N'800317011929306', CAST(N'2024-09-18T14:52:45.520' AS DateTime), NULL, NULL, NULL, N'T', N'201112847004', N'jjjj', N'A')
INSERT [dbo].[Message] ([Message_Id], [Message_Source_Id], [Message_Benefactor_Id], [Message_Sent_DateTime], [Message_Received_DateTime], [Message_Read_DateTime], [Message_Deleted_DateTime], [Message_Type], [Message_PhoneNumberFull], [Message_Text], [Message_Status]) VALUES (N'3EB04FDB444DF03593EDB4', N'4001', N'801661003885476', CAST(N'2024-09-17T17:43:06.857' AS DateTime), NULL, NULL, NULL, N'T', N'201141040999', N'hi', N'A')
INSERT [dbo].[Message] ([Message_Id], [Message_Source_Id], [Message_Benefactor_Id], [Message_Sent_DateTime], [Message_Received_DateTime], [Message_Read_DateTime], [Message_Deleted_DateTime], [Message_Type], [Message_PhoneNumberFull], [Message_Text], [Message_Status]) VALUES (N'3EB051E684CF5DCA3584B4', N'4001', N'800317011929306', CAST(N'2024-09-19T15:24:07.283' AS DateTime), NULL, NULL, NULL, N'T', N'201112847004', N'hello', N'A')
INSERT [dbo].[Message] ([Message_Id], [Message_Source_Id], [Message_Benefactor_Id], [Message_Sent_DateTime], [Message_Received_DateTime], [Message_Read_DateTime], [Message_Deleted_DateTime], [Message_Type], [Message_PhoneNumberFull], [Message_Text], [Message_Status]) VALUES (N'3EB0554B3677DA1190723A', N'4001', N'800317011929306', CAST(N'2024-09-19T15:18:07.407' AS DateTime), NULL, NULL, NULL, N'T', N'201112847004', N'sdds', N'A')
INSERT [dbo].[Message] ([Message_Id], [Message_Source_Id], [Message_Benefactor_Id], [Message_Sent_DateTime], [Message_Received_DateTime], [Message_Read_DateTime], [Message_Deleted_DateTime], [Message_Type], [Message_PhoneNumberFull], [Message_Text], [Message_Status]) VALUES (N'3EB0B247F869BAD1A527A8', N'4001', N'800317011929306', CAST(N'2024-09-19T16:00:20.850' AS DateTime), NULL, NULL, NULL, N'T', N'201112847004', N'fghghf', N'A')

GO
ALTER TABLE [dbo].[https_log] ADD  CONSTRAINT [DF_https_log_enterdate]  DEFAULT (getdate()) FOR [enterdate]
GO
USE [master]
GO
ALTER DATABASE [whats_db] SET  READ_WRITE 
GO