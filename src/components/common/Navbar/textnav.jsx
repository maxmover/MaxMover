<div className={styles.settings}>
<Link to="/">&nbsp; My Account</Link>
<Link to="/">&nbsp; Setting</Link>
<Link to="/">&nbsp; Lock Screen</Link>
</div>

// ========================================================
<NavUrl
            url="/"
            icon={<MdOutlineDashboardCustomize />}
            description="Dashboard"
          />
          <hr />
          <div>
            <h5 onClick={}>User Management</h5>
           
          </div>
          <hr />
          <NavUrl
            url="inquirymanage"
            icon={<AiOutlineFileSearch />}
            description="Inquiry Management"
          />

          <hr />

          <NavUrl
            url="jobpaymentmanage"
            icon={<GiExpense />}
            description="Job Payment Management"
          />
          <hr />
          <NavUrl
            url="accountmanage"
            icon={<MdOutlineManageAccounts />}
            description="Account Management"
          />
          <hr />
          <NavUrl
            url="maxcliq"
            icon={<BsChatLeftDots />}
            description="Max Cliq"
          />
          <hr />
          <NavUrl
            url="servicecategories"
            icon={<MdOutlineSettings />}
            description="Service Categories"
          />
          <hr />
          <NavUrl
            url="vehiclemanage"
            icon={<BsTruck />}
            description="Vehicle Management"
          />
          <hr />
          <NavUrl
            url="tempnotes"
            icon={<VscServerEnvironment />}
            description="Templates & Notes"
          />
          <hr />
          <NavUrl
            url="smsmanage"
            icon={<BsChatLeftDots />}
            description="SMS Management"
          />