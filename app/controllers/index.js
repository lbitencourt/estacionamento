module.exports = (app)=>{
	const indexCtrl = {
		index: (req,res)=>{
			res.render('index')
		},

		logar: (req,res)=> res.redirect('/painel'),

		error: (req,res)=>{
			req.flash('info', 1);
			res.redirect('/')			
		}

	};
	return indexCtrl;
}