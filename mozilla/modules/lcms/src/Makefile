# ***** BEGIN LICENSE BLOCK *****
# Version: MPL 1.1/GPL 2.0/LGPL 2.1
#
# The contents of this file are subject to the Mozilla Public License Version
# 1.1 (the "License"); you may not use this file except in compliance with
# the License. You may obtain a copy of the License at
# http://www.mozilla.org/MPL/
#
# Software distributed under the License is distributed on an "AS IS" basis,
# WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
# for the specific language governing rights and limitations under the
# License.
#
# The Original Code is lcms mozilla build integration.
#
# The Initial Developer of the Original Code is IBM Corporation.
# Portions created by the Initial Developer are Copyright (C) 2007
# the Initial Developer. All Rights Reserved.
#
# Contributor(s):
#
# Alternatively, the contents of this file may be used under the terms of
# either the GNU General Public License Version 2 or later (the "GPL"), or
# the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
# in which case the provisions of the GPL or the LGPL are applicable instead
# of those above. If you wish to allow use of your version of this file only
# under the terms of either the GPL or the LGPL, and not to allow others to
# use your version of this file under the terms of the MPL, indicate your
# decision by deleting the provisions above and replace them with the notice
# and other provisions required by the GPL or the LGPL. If you do not delete
# the provisions above, a recipient may use your version of this file under
# the terms of any one of the MPL, the GPL or the LGPL.
#
# ***** END LICENSE BLOCK *****

DEPTH           = ../../..
topsrcdir       = ../../..
srcdir          = .
VPATH           = .

include $(DEPTH)/config/autoconf.mk

MODULE		= lcms
LIBRARY_NAME	= mozlcms

GRE_MODULE	= 1
LIBXUL_LIBRARY = 1
DIST_INSTALL = 1

ifeq (,$(MOZ_ENABLE_LIBXUL)$(BUILD_STATIC_LIBS))
ifeq (,$(filter-out WINNT WINCE,$(OS_ARCH)))
ifndef GNU_CC
MAPFILE	= $(LIBRARY_NAME).map
DEFFILE	= $(win_srcdir)/lcms.def
endif
endif

ifeq (,$(filter-out WINNT WINCE OS2,$(OS_ARCH)))
DEFINES	+= -DLCMS_DLL=1 -DLCMS_DLL_BUILD=1
else
VISIBILITY_FLAGS =
endif
endif

REQUIRES	= $(LCMS_REQUIRES) \
		  $(NULL)

CSRCS = cmscnvrt.c cmserr.c cmsgamma.c cmsgmt.c cmsintrp.c cmsio1.c \
	cmslut.c cmsmatsh.c cmsmtrx.c cmspack.c cmspcs.c cmswtpnt.c \
	cmsxform.c cmssamp.c cmscam97.c cmsnamed.c cmsps2.c cmscam02.c \
	cmsvirt.c cmscgats.c cmsio0.c

LOCAL_INCLUDES += -I../include

include $(topsrcdir)/config/rules.mk

ifeq ($(OS_ARCH),OS2)
ADD_TO_DEF_FILE = sed -e '1,/^EXPORTS$$/ d' -e 's,=.*$$,,' -e 's,\ \([_c]\),_\1,' \
		$(srcdir)/lcms.def >> $(DEF_FILE)
endif
